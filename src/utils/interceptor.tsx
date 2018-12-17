export const responseInterceptor = (
  response: any,
  success: (data: any) => void,
  fail: (data: any) => void) => {
  if (response.status == 200) {
    success(response.data);
  } else {
    fail(response.data);
  }
};
