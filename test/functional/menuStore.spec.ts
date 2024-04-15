import { setActivePinia, createPinia } from "pinia";
import { useMenuStore } from "@/stores/menuStore";
import { expect } from "chai";

describe("menuStore", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("should initialize with default value", () => {
        const menuStore = useMenuStore();
        expect(menuStore.menuOpen).to.be.false;
    });

    it("should toggle the menu properly", () => {
        const menuStore = useMenuStore();
        menuStore.toggleMenu();
        expect(menuStore.menuOpen).to.be.true;
    });
});
