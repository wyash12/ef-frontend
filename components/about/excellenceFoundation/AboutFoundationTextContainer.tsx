import classes from "@/components/about/excellenceFoundation/AboutFoundation.module.scss";

export default function AboutFoundationTextContainer(): JSX.Element {
  return (
    <>
      <div className={classes.heading}>About</div>
      <div className={classes.heading}>Excellence Foundation</div>
      <div className={classes.parentContainer}>
        <div className={classes.paragraph}>
          <p>
            Excellence Foundation aims to empower aspiring professionals in the
            field of Civil engineering and architecture and equip them with the
            skills and knowledge necessary to succeed in their careers.We focus
            on quality teaching connecting the young minds to the construction
            world. Our on-site and off-site internship training helps Civil
            Engineers, Architects, Government Officers, and Entrepreneurs in the
            construction sector boost their Construction skills. We help to
            bridge the skill gap between aspiring professionals and industry
            demands through job-oriented courses. The ultimate aim is to equip
            young engineers with the latest skill sets and cutting-edge tools in
            new-age technologies.
          </p>
        </div>
      </div>
    </>
  );
}
