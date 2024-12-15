export class PathChecker {
  private url: string;
  private urlsForInclude: string[];
  constructor(url: string, urlsForInclude: string[]) {
    this.url = url;
    this.urlsForInclude = urlsForInclude;
  }
  public checkIncludeUrl() {
    return this.urlsForInclude.some((url) => url == this.url);
  }
}
