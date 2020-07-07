export function formatPhone(phone) {
  return (
    phone.substring(0, 4) +
    ' ' +
    phone.substring(4, 7) +
    ' ' +
    phone.substring(7)
  );
}
