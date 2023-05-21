import { ItemParameters } from "./types";

export class ItemEvent {
  private eventTarget = new EventTarget();

  public on(eventName: string, listener: (params: ItemParameters) => void): void {
    this.eventTarget.addEventListener(eventName, (event: Event) => {
      listener((event as CustomEvent<ItemParameters>).detail);
    });
  }

  public emit(eventName: string, params: ItemParameters): void {
    const event = new CustomEvent<ItemParameters>(eventName, {
      detail: params
    });
    this.eventTarget.dispatchEvent(event);
  }
}
