//To clear popup LOV search data create a dynamic action on page load event
//select execute java script code and paste it there
//give this class name reset-filter in advance section to the item that you want to clear

$(".reset-filter").change((e) => {
  $(
    `#PopupLov_${apex.env.APP_PAGE_ID}_${$(e.currentTarget).attr(
      "id"
    )}_dlg input`
  )
    .val("")
    .trigger("keydown");
  // console.log("Event Fire");
});
