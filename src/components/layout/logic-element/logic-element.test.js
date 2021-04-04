import LogicElement from "./index";

const elementProp = {id: 1, logic: "AND"};

describe("Transfer props check for LogicElement", () => {
  const element = (props) => mount(<LogicElement {...props} />);
  let logicElement;

  beforeEach(() => {
    logicElement = element(elementProp);
  });

  it("Transfer props id check for LogicElement", () => {
    expect(logicElement.props().id).toEqual(elementProp.id);
  });

  it("Transfer props logic check for LogicElement", () => {
    expect(logicElement.props().logic).toEqual(elementProp.logic);
  });
})

it("LogicElement snapshot check", () => {
  const logicElementTree =
    render(<LogicElement id={elementProp.id} logic={elementProp.logic} />);

  expect(toJson(logicElementTree)).toMatchSnapshot();
});
