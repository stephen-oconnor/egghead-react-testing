import React from "react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Enzyme adapter needs to be setup for React 16.
configure({ adapter: new Adapter() });

// Wrap tests in a describe block.
describe("<App />", () => {
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
	it("should have an h1 with specified text", () => {
		expect(wrapper.find("h1").text()).toBe("React");
	});
});
