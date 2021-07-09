/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
  return {
    theme: {},
  };
}
