import { default as React, FC, HTMLAttributes } from '../../../node_modules/react';

export interface TeliSwitchProps {
    /**
     * If true, the component is checked.
     */
    checked?: boolean;
    /**
     * The default checked state. Use when the component is not controlled.
     */
    defaultChecked?: boolean;
    /**
     * If true, the component is disabled.
     */
    disabled?: boolean;
    /**
     * If given, uses a negative margin to counteract the padding on one side
     * (this is often helpful for aligning the left or right side of the icon with
     * content above or below, without ruining the border size and shape).
     */
    edge?: "end" | "start";
    /**
     * The id of the input element.
     */
    id?: string;
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)
     * applied to the input element.
     */
    inputProps?: HTMLAttributes<HTMLInputElement>;
    /**
     * Pass a ref to the input element.
     */
    inputRef?: React.RefObject<HTMLInputElement> | null;
    /**
     * Text to be used in an enclosing label element.
     */
    label?: string;
    /**
     * The position of the label.
     * @default end
     */
    labelPlacement?: "start" | "end";
    /**
     * Callback fired when the state is changed. <code>event</code> The event
     * source of the callback. You can pull out the new value by accessing
     * event.target.value (string). You can pull out the new checked state by
     * accessing event.target.checked (boolean)
     */
    onChange?: (event: React.ChangeEvent) => void;
    /**
     * If true, the input element is required.
     */
    required?: boolean;
    /**
     * The size of the component. small is equivalent to the dense switch styling.
     * @default small
     */
    size?: "small" | "medium";
    /**
     * The value of the component. The DOM API casts this to a string. The browser
     * uses "on" as the default value.
     */
    value?: any;
}
/**
 * Switches toggle the state of a single setting on or off. The option that the
 * switch controls, as well as the state it's in, should be made clear from the
 * corresponding inline label. If unsure when to use toggle switch or checkbox,
 * refer to [Checkbox vs Toggle
 * Switch](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)
 */
declare const TeliSwitch: FC<TeliSwitchProps>;
export default TeliSwitch;
