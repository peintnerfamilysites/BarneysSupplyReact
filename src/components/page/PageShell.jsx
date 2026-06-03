import NavBar from "../navigation/NavBar";
import Seo from "../seo/Seo";
import { fluidFadeUpStyles } from "../../styles/animationStyles";
import { gradientPageClass, pageContentClass } from "../../styles/classNames";

function PageShell({ seo, schema, children, contentClassName = pageContentClass }) {
  return (
    <>
      <Seo {...seo} schema={schema} />
      <div className={gradientPageClass}>
        <style>{fluidFadeUpStyles}</style>
        <NavBar />
        <div className={contentClassName}>{children}</div>
      </div>
    </>
  );
}

export default PageShell;
