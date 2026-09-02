import { testimonialAvatar } from '@/config/images';

export type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Jennifer & Mark Travis',
    role: 'Buyers',
    location: 'Sellwood, Portland',
    quote:
     'Working with Catherine was amazing. Catherine helped me and my fiancée find our dream house after touring many houses over a couple years. She understood exactly what we were looking for in a home. Catherine did all the hard work for us, and kept us in the loop every step of the way.',
    rating: 5,
    avatar: testimonialAvatar(0),
  },
  {
    name: 'Daniel Okafor',
    role: 'Seller',
    location: 'Beaverton',
    quote:
      'I had three offers within five days of listing. Catherine\'s staging advice and pricing strategy were spot on. She handled everything while I focused on my move across the country.',
    rating: 5,
    avatar: testimonialAvatar(1),
  },
  {
    name: 'Priya Nair',
    role: 'Buyer',
    location: 'Lake Oswego',
    quote:
      'As a relocating physician I had one weekend to find a home. Catherine had a tailored tour ready and helped me close in 21 days. Truly above and beyond.',
    rating: 5,
    avatar: testimonialAvatar(2),
  },
  {
    name: 'The Holloway Family',
    role: 'Buyers',
    location: 'Hillsboro',
    quote:
      'We worked with two other agents before Catherine. The difference was night and day — she actually listened. Our kids have a yard now and we\'re so grateful.',
    rating: 5,
    avatar: testimonialAvatar(3),
  },
  {
    name: 'Scott Whitman',
    role: 'Seller & Buyer',
    location: 'Northeast Portland',
    quote:
      'Sold our condo and helped us buy a bigger place in the same transaction. Catherine managed both sides flawlessly and kept us calm through a tricky closing.',
    rating: 5,
    avatar: testimonialAvatar(4),
  },
  {
    name: 'Amara Bello',
    role: 'First-time Buyer',
    location: 'Gresham',
    quote:
      'I was terrified of the process. Catherine explained every document, every clause. I closed on a home I love at a payment I can actually afford. Cannot recommend her enough.',
    rating: 5,
    avatar: testimonialAvatar(5),
  },
];
