export function errorHandler(err) {
    console.error(err.message);
    this.message = err.message;
    this.error = err.toString();
}