export const convertTimestampToDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
  
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };
  
  export const convertTimestampToDayMonthFormat = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
  
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit', 
    });
  };

  export const calculateAge = (timestamp: number): string  => {
    const today = new Date();
    const birthDate = new Date(timestamp * 1000); 
  
    let age = today.getFullYear() - birthDate.getFullYear(); 
  
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();
  
    if (month < 0 || (month === 0 && day < 0)) {
      age--;
    }
  
    return age.toString();
  }