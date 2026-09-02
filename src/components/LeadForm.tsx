import { useState, type FormEvent } from 'react';
import { Check, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Button } from './Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type Props = {
  source?: string;
  compact?: boolean;
  title?: string;
  subtitle?: string;
};

const interests = ['Buying', 'Selling', 'Both', 'Just browsing'];
const priceRanges = [
  'Under $500k',
  '$500k – $750k',
  '$750k – $1M',
  '$1M – $1.5M',
  'Over $1.5M',
  'Not sure yet',
];

export function LeadForm({
  source = 'home',
  compact = false,
  title = 'Let\'s find your perfect home',
  subtitle = 'Tell me what you\'re looking for and I\'ll reach out within 24 hours with a personalized plan.',
}: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    price_range: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!form.name.trim() || !form.email.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name and email.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      setErrorMsg('That email address doesn\'t look right.');
      return;
    }

    if (!supabase) {
      setStatus('error');
      setErrorMsg(
        'Form submissions are temporarily unavailable. Please email or call Catherine directly.',
      );
      return;
    }

    const { error } = await supabase.from('leads').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      interest: form.interest || null,
      price_range: form.price_range || null,
      message: form.message.trim() || null,
      source,
    });

    if (error) {
      setStatus('error');
      if (error.code === '23505') {
        setErrorMsg(
          "You've already submitted a request recently. Catherine will be in touch soon — no need to submit again.",
        );
      } else {
        setErrorMsg('Something went wrong sending your request. Please try again.');
      }
      return;
    }

    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-ink-200 bg-white p-8 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-green-100 text-green-600">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-ink-900">
          Thank you, {form.name.split(' ')[0]}!
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-600">
          Your request is in. Catherine will personally reach out within 24 hours
          to start building your personalized home search.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm({
              name: '',
              email: '',
              phone: '',
              interest: '',
              price_range: '',
              message: '',
            });
          }}
          className="mt-5 text-sm font-semibold text-gold-600 hover:text-gold-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200';

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-7"
      noValidate
    >
      {!compact && (
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-ink-900">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{subtitle}</p>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
            Name <span className="text-gold-600">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your name"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@email.com"
            className={inputClass}
            required
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="(503) 555-0123"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
            I'm interested in
          </label>
          <select
            value={form.interest}
            onChange={(e) => update('interest', e.target.value)}
            className={inputClass}
          >
            <option value="">Select one</option>
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
            Price range
          </label>
          <select
            value={form.price_range}
            onChange={(e) => update('price_range', e.target.value)}
            className={inputClass}
          >
            <option value="">Select a range</option>
            {priceRanges.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
            What are you looking for?
          </label>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Neighborhoods, must-haves, timeline, anything that helps..."
            rows={compact ? 3 : 4}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">
          Your info is never shared. Catherine will reply personally.
        </p>
        <Button
          type="submit"
          className={status === 'submitting' ? 'pointer-events-none opacity-70' : ''}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            'Get my home search started'
          )}
        </Button>
      </div>
    </form>
  );
}
