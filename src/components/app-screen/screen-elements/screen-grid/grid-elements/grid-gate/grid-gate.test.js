import GridGate from "./index";

const gateProp = {id: 1, logic: "AND", x: 0, y: 0};

describe("Transfer props check for LogicGate", () => {
  const element = (props) => mount(<GridGate {...props} />);
  let logicGate;

  beforeEach(() => {
    logicGate = element(gateProp);
  });

  it("Transfer props id check for LogicGate", () => {
    expect(logicGate.props().id).toEqual(gateProp.id);
  });

  it("Transfer props logic check for LogicGate", () => {
    expect(logicGate.props().logic).toEqual(gateProp.logic);
  });
})

it("LogicGate snapshot check", () => {
  const logicElementTree = (props) => render(<GridGate {...props} />);

  expect(toJson(logicElementTree(gateProp))).toMatchSnapshot();
});
