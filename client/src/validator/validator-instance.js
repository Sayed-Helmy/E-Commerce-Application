import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
require("ajv-errors")(ajv);
addFormats(ajv);
export default ajv;
