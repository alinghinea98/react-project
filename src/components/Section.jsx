export default function Section({ title, children, ...props }) {
  // forward all extra props with ...props
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
