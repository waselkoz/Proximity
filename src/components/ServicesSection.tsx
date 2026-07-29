const services = [
  {
    title: 'UI/UX Design',
    description: 'We create intuitive, engaging, and aesthetically pleasing interfaces that your users will love.',
    icon: '✨'
  },
  {
    title: 'Front-End Development',
    description: 'Performant, accessible, and responsive web applications built with modern frameworks.',
    icon: '💻'
  },
  {
    title: 'Brand Identity',
    description: 'Distinctive visual identities that communicate your brand values and stand out in the market.',
    icon: '🎨'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-8 bg-background-elevated relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">Our Expertise</h2>
          <p className="text-lg text-text-muted">
            We combine strategic thinking with premium design to deliver outstanding digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-border p-12 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 cursor-default">
              <div className="text-4xl mb-6 inline-block">{service.icon}</div>
              <h3 className="text-2xl mb-4 font-semibold">{service.title}</h3>
              <p className="text-text-muted text-[0.95rem] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
