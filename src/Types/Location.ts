import { DocumentLocation } from "./DocumentLocation";

/**An object that describe a location in a document*/
export interface Location {
  /**The uri of the document*/
  uri: string;

  /**The position of the in the document*/
  position: DocumentLocation;
}

/** */
export namespace Location {
  /**TODO add documentation
   *
   * @param value
   * @returns
   */
  export function is(value: any): value is Location {
    if (value) {
      if (value.uri && value.position) return true;
    }

    return false;
  }

  /**TODO add documentation
   *
   * @param uri
   * @param position
   * @returns
   */
  export function create(uri: string, position: DocumentLocation = 0): Location {
    return { uri: uri, position: position };
  }

  /**TODO add documentation
   *
   * @returns
   */
  export function empty() {
    return create("");
  }
}
