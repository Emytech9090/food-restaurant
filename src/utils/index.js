export const generateOtp = () => {
  const digits = "0123456789";
  let otp = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    otp += digits[randomIndex];
  }

  return otp;
};

export const getPagination = (totalCount, currentPage, limit) => {
  const totalPage = Math.ceil(totalCount / limit) || 1;

  const hasNextPage = currentPage < totalPage;
  const hasPrevPage = currentPage > 1;

  return {
    totalCount,
    totalPage,

    hasNextPage,
    nextPage: hasNextPage ? currentPage + 1 : null,

    hasPrevPage,
    prevPage: hasPrevPage ? currentPage - 1 : null,

    currentPage,
  };
};
