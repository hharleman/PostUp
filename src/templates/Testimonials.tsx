import { Section } from '@/features/landing/Section';

const testimonials = [
  {
    quote: 'PostUp transformed our content workflow!',
    name: 'Alex P.',
    role: 'Marketing Lead',
    stars: 5,
  },
  {
    quote: 'Creating posts is now a breeze.',
    name: 'Sam R.',
    role: 'Blogger',
    stars: 5,
  },
  {
    quote: 'We publish faster than ever before.',
    name: 'Jordan K.',
    role: 'Product Manager',
    stars: 5,
  },
  {
    quote: 'Our team loves the intuitive design.',
    name: 'Morgan L.',
    role: 'Content Strategist',
    stars: 4,
  },
  {
    quote: 'A must-have tool for marketers.',
    name: 'Riley T.',
    role: 'SEO Specialist',
    stars: 5,
  },
];

export const Testimonials = () => (
  <Section title="Testimonials">
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {testimonials.map(t => (
        <div key={t.name} className="w-80 shrink-0 rounded-lg border p-6">
          <div className="mb-2 text-yellow-500">{'★'.repeat(t.stars)}</div>
          <p className="mb-4 text-sm">
            &ldquo;
            {t.quote}
            &rdquo;
          </p>
          <p className="font-semibold">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Testimonials;
