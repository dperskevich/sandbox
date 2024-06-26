import { classNames } from "./class-names";

describe("classNames", () => {
	test("Class name without mods and additional attributes", () => {
		expect(classNames("someClass")).toBe("someClass");
	});

	test("Class name with mods and additional attributes", () => {
		const fullAttrSet = classNames("button", { hovered: true, red: false }, ["no-elevation"]);
		expect(fullAttrSet).toBe("button hovered no-elevation");
	});
});