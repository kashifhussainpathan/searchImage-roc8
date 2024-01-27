const useFirstLetterCapital = (value: string) => {
  const capatiliseValue = value.charAt(0).toUpperCase() + value.slice(1);

  return capatiliseValue;
};

export default useFirstLetterCapital;
