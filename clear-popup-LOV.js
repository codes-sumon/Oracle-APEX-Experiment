//To clear popup LOV search data chreate a dynamic action on page load event and select execute java script code and paste is there
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
