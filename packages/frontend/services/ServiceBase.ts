export abstract class ServiceBase {
  protected abstract BASE_URL: string;

  protected async get<T = any>(url: string): Promise<T> {
    return fetch(`${this.BASE_URL}${url}`, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }).then(res => res.json());
  }

  protected async post<T = any>(url: string, body: BodyInit): Promise<T> {
    return fetch(`${this.BASE_URL}${url}`, {
      body,
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }).then(res => res.json());
  }

  protected async put<T = any>(url: string, body: BodyInit): Promise<T> {
    return fetch(`${this.BASE_URL}${url}`, {
      body,
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    }).then(res => res.json());
  }

  protected async delete<T = any>(url: string): Promise<T> {
    return fetch(`${this.BASE_URL}${url}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    }).then(res => res.json());
  }
}
