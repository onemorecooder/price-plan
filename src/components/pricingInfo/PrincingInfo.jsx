import Icon from "../icon/Icon";

const PrincingInfo = ({
  img,
  planName,
  price,
  subTitle,
  benefitsList,
  textButton,
  children,
  onClick
}) => {
  return (
    <>
        <img className="image" src={img} alt="img" />
        <p className="title">{planName}</p>
        <h1 className="price">{price}</h1>
        <p className="subtitle">{subTitle}</p>
        <ul className="benefitList">
          {benefitsList.map(({ checked, text }) => {
            return (
              <li className={checked ? "benefit checked" : "benefit"} key={text}>
                <Icon icon="check"></Icon>
                {text}
              </li>
            );
          })}
        </ul>
        <button className="buttonPlan" onClick={onClick}>
          {textButton}
        </button>
        {children}
    </>
  );
};

export default PrincingInfo;
