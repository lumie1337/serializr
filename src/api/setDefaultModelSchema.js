import { invariant, isModelSchema } from "../utils/utils"

/**
 * Sets the default model schema for class / constructor function.
 * Everywhere where a model schema is required as argument, this class / constructor function
 * can be passed in as well (for example when using `object` or `ref`.
 *
 * When passing an instance of this class to `serialize`, it is not required to pass the model schema
 * as first argument anymore, because the default schema will be inferred from the instance type.
 *
 * @param {constructor|class} clazz class or constructor function
 * @param {ModelSchema} modelSchema - a model schema
 * @returns {ModelSchema} model schema
 */
export default function setDefaultModelSchema(clazz, modelSchema) {
    invariant(isModelSchema(modelSchema))
    return clazz.serializeInfo = modelSchema
}
