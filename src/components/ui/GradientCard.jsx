import { gradientCardBorderClass } from "../../styles/classNames";

function GradientCard({ children, className = gradientCardBorderClass, innerClassName }) {
  return (
    <div className={className}>
      <div className={innerClassName}>{children}</div>
    </div>
  );
}

export default GradientCard;
