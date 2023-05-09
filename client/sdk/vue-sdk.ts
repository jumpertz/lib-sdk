interface Config {
  apiKey: string;
}

export class VueSDK {
  config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  trackPageView(pageName: string): void {
    console.log(`Page vue : ${pageName}`);
  }

  trackEvent(eventName: string, eventData: Record<string, unknown>): void {
    console.log(`Événement : ${eventName}`, eventData);
  }
}
