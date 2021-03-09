import {BaseNode} from "./";
import {ContextType, NodeType} from "../enums";

/**
 * This is the base class for RegulativeStatement and ConstitutiveStatement.
 * Its only use is to provide a shorter check for a union type of the two child classes.
 * Oh, and it can hold a context type for statements that make up an Activation Condition or Execution Constraint.
 */
export default class StatementNode extends BaseNode {
    nodeType: NodeType = NodeType.statement;
    /* Optional context type for using the Circumstances Taxonomy on Statements.
       For descendants of ActivationConditions/ExecutionConstraints Components. */
    contextType?: ContextType;

    // Constructor omitted because it doesn't need to do anything

    /**
     * Sets the context type to the passed in context type.
     *
     * @param contextType The context type to set
     */
    setContextType(contextType: ContextType) : void {
        this.contextType = contextType;
        this.update();
    }

    /**
     * Unsets the context type (sets it to undefined).
     */
    unsetContextType() : void {
        this.contextType = undefined;
        this.update();
    }
}
