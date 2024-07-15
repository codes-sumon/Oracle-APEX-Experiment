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
