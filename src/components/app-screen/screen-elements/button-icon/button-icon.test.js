import ButtonIcon from "./button-icon";

const elementProp = {
  icon: "bi-eyedropper",
  onClick: () => console.log('Simple test'),
  propsClass: 'test'
};

describe("Snapshot check props", () => {
  const element = (props) => render(<ButtonIcon {...props} />);

  it("LogicElement use Transferred Props", () => {
    const buttonIcon = element(elementProp)
    expect(toJson(buttonIcon)).toMatchSnapshot();
  });

  it("LogicElement use Default Props", () => {
    const buttonIcon = element()
    expect(toJson(buttonIcon)).toMatchSnapshot();
  });
});

describe("Check defaultProps", () => {
  it("Check default function onClick()", () => {
    const result = ButtonIcon.defaultProps.onClick()
    expect(result).toBeUndefined();
  });
});
