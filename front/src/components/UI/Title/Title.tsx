import cn from "classnames";

interface TitleProps {
  variant: Sizes;
  classNameProp?: string;
  children: string;
}

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title = ({ variant, classNameProp, children, ...props }: TitleProps) => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;

  return (
    <Tag {...props} className={cn(classNameProp)}>
      {children}
    </Tag>
  );
};
