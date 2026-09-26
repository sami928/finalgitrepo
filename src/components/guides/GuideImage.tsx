import { ImageIcon } from 'lucide-react';
import { slotFor } from '@/data/guides/catalog';

/**
 * A guide photo cropped to its slot's aspect ratio. Slots without a photo yet
 * render a labelled placeholder so missing photography is easy to spot.
 * To fill one: drop <slot-id>.jpg into public/guides/images/<guide>/ and run
 * `npm run guide-photos` (see src/data/guides/README.md).
 */
export function GuideImage({
  guide,
  slot,
  caption,
  rounded = 'rounded-2xl',
  className = '',
}: {
  guide: string;
  slot: string;
  caption?: string;
  rounded?: string;
  className?: string;
}) {
  const info = slotFor(guide, slot);
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden bg-ink-100 ${rounded}`}
        style={{ aspectRatio: info?.aspect ?? 16 / 9 }}
      >
        {info?.src ? (
          <img
            src={info.src}
            alt={caption || info.subject || ''}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1.5 border border-dashed border-ink-300 p-4 text-center">
            <ImageIcon className="h-5 w-5 text-ink-400" strokeWidth={1.5} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
              Photo coming soon
            </span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs uppercase tracking-wide text-ink-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
