import React from "react";
import App, { Link } from "./App";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

// Enzyme adapter needs to be setup for React 16.
configure({ adapter: new Adapter() });

// Wrap tests in a describe block. <App />
describe("<App /> shallow rendering", () => {
	// shallow is used to test individual components, doesn't care about child components.
	const wrapper = shallow(<App />, {
		context: {},
		disableLifecycleMethods: true,
	});

	// Individual test(s).
	it("should render App", () => {
		console.log(wrapper.debug());
	});

	// Find a DOM element.
	it("should contain 1 a element", () => {
		expect(wrapper.find("a").length).toBe(1);
	});

	// Check if a DOM element exists.
	it("a element should have a class of App-link", () => {
		expect(wrapper.find(".App-link").exists()).toBe(true);
	});

	// Scope test to parent --> child hierarchy.
	it("should contain 3 list items", () => {
		expect(wrapper.find("ul").children().length).toBe(3);
	});

	// Check for a class name.
	it("should have a class of test", () => {
		expect(wrapper.find("ul").hasClass("test")).toBe(true);
	});

	// Check for text.
	it("should have an h1 with 'React' text", () => {
		expect(wrapper.find("h1").text()).toBe("React");
	});

	// Check for a prop.
	it("should have a text prop with 'Hello' text", () => {
		expect(wrapper.find('[text="Hello"]').length).toBe(1);
	});

	// Check for an attribute.
	it("should have an alt attribute of 'logo'", () => {
		expect(wrapper.find({ alt: "logo" }).length).toBe(1);
	});

	// Snapshot. A 'picture' of the components structure. Can be updated (u) when necessary.
	it("matches the snapshot", () => {
		const tree = shallow(<App />);
		expect(toJson(tree)).toMatchSnapshot();
	});
});

// Wrap tests in a describe block. <App />
describe("<App /> mount rendering", () => {
	// mount will render the full DOM.
	const wrapper = mount(<App />);

	// Check for text.
	it("should have an h1 with 'React' text", () => {
		expect(wrapper.find("h1").text()).toBe("React");
		wrapper.unmount();
	});

	// Snapshot. A 'picture' of the components structure. Can be updated (u) when necessary.
	it("matches the snapshot", () => {
		const tree = shallow(<App />);
		expect(toJson(tree)).toMatchSnapshot();
		tree.unmount();
	});
});

// Wrap tests in a describe block. <Link />
describe("<Link />", () => {
	// Check instance value of prop.
	it("link component accepts address prop", () => {
		const wrapper = shallow(<Link address="www.google.com" />);
		expect(wrapper.instance().props.address).toBe("www.google.com");
	});

	// Check a tag is using correct href value.
	it("a tag node renders href correctly", () => {
		const wrapper = shallow(<Link address="www.google.com" />);
		expect(wrapper.props().href).toBe("www.google.com");
		// Check when props are updated. Causes a re-render.
		wrapper.setProps({ hide: true });
		expect(wrapper.get(0)).toBeNull();
	});
});
