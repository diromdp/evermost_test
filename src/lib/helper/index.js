export const formatRupiah = (number, prefix = false) => {
   try {
      if (typeof number == "number") {
         number = number.toString();
      }

      var number_string = number.replace(/[^,\d]/g, "").toString(),
         split = number_string.split(","),
         spliter = split[0].length % 3,
         rupiah = split[0].substr(0, spliter),
         thousand = split[0].substr(spliter).match(/\d{3}/gi);

      let separator = false;
      if (thousand) {
         separator = spliter ? "." : "";
         rupiah += separator + thousand.join(".");
      }

      rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
      return prefix == undefined ? rupiah : rupiah ? "Rp " + rupiah : "";
   } catch (error) {
      return "Rp 0";
   }
};