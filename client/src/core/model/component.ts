import { IComponent } from "./interfaces"

/**
 * An ABDICO component that holds text content.
 * It can optionally have prefix and suffix.
 * Main holds the text that most narrowly fits the component type.
 * Prefix and suffix hold the rest of the clause that belongs to the component,
 * like prepositions. Example: "against a certified operation", an Object.
 * "a certified operation" is the content; "against" is the prefix.
 *
 * When content is undefined, the Component is considered to be unset, otherwise set.
 * Use that to differentiate between intentionally empty and not yet set content.
 */
 export class Component implements IComponent {
    content?: {
        main: string,
        prefix: string,
        suffix: string
    };

    /**
	 * Create a new Component that holds text content.
	 * If no arguments are provided, content will be undefined.
	 * Otherwise, sets the content strings to the passed in arguments or an empty string.
	 *
	 * @param main (Optional) The text that most narrowly fits the component
	 * @param prefix (Optional) Excess text that goes before the main content
	 * @param suffix (Optional) Excess text that goes after the main content
	 */
    constructor(main?: string, prefix?: string, suffix?: string) {
		if (main || prefix || suffix) {	// At least one argument provided
			this.content = {
				main: (main) ? main : "",
				prefix: (prefix) ? prefix : "",
				suffix: (suffix) ? suffix : ""
			}
		}
    }

    /**
	 * Set each part of the component individually.
	 * Only the provided parameters are changed.
	 * If no arguments are provided, the content strings will not be changed.
	 * If content is undefined, defines it.
	 *
	 * @param main (Optional) The text that most narrowly fits the component
	 * @param prefix (Optional) Excess text that goes before the main content
	 * @param suffix (Optional) Excess text that goes after the main content
	 */
    set(main?: string, prefix?: string, suffix?: string) {
		if (!this.content) {
			this.content = {
				main: (main) ? main : "",
				prefix: (prefix) ? prefix : "",
				suffix: (suffix) ? suffix : ""
			}
		} else {
			if (main) {
				this.content.main = main;
			}
			if (prefix) {
				this.content.prefix = prefix;
			}
			if (suffix) {
				this.content.suffix = suffix;
			}
		}
    }

	/**
	 * Set this Component's content to undefined if it isn't already.
	 */
	unset() {
		if (this.content) {
			this.content = undefined;
		}
	}

	/**
	 * Concatenates prefix, main and suffix and returns a properly formatted string.
	 * @return A string made from this component's text content
	 */
	string() : string {
		return "lolhjj";
	};
}

