import "./page.css";

export function Page({
  className,
  title,
  subtitle,
  description,
  children,
  ...props
}: any) {
  return (
    <div className={"page " + className} {...props}>
      <main>
        <header>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <h3>{description}</h3>
        </header>
        {children}
      </main>
    </div>
  );
}
