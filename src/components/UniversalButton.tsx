export type UniversalButtonProps = {
  to?: string;
  from?: string;
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  title?: string;
};

export const UniversalButton = ({
  to,
  from,
  href,
  disabled,
  children,
  onClick,
  ...props
}: React.PropsWithChildren<UniversalButtonProps>) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopenner noreferrer"
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button disabled={disabled} {...props} onClick={onClick}>
      {children}
    </button>
  );
};
