import { ComponentProps, FC } from "react";

// type Props_Meta<Component> = {
//   [Property in keyof Component]: Component[Property];
// };

interface Props_A {
  size?: "sm" | "md";
}

function A({ size }: Props_A) {
  return <div />;
}

interface Props_B {
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

function B({ size, disabled }: Props_B) {
  return <div />;
}

const Components = { A, B } as const;

type PropsMerge<Z extends FC> = Props & ComponentProps<Z>;
interface Props {
  variant: keyof typeof Components;
}

function ComponentParent<C extends FC>({
  variant,
  ...props
}: PropsMerge<C>) {
  const Component = Components[variant];

  return <Component {...props} />;
}

<>
  <ComponentParent<typeof A> variant="A" size="sm" />
  <ComponentParent<typeof B> variant="B" size="lg" disabled />
</>;
