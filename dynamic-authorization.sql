DECLARE
    v_cnt_page NUMBER := 0;
    l_page_id  NUMBER :=v('APP_PAGE_ID');--:APP_PAGE_ID;  -- Use bind variable for APP_PAGE_ID
    l_user_id  VARCHAR2(4000) := v('APP_USER'); --:APP_USER;  -- Store the user ID
    l_url      VARCHAR2(4000);
BEGIN
    BEGIN
        -- Fetch the PAGE_ID from USER_ACCESS table if it exists
        SELECT NVL(PAGE_ID, 0)
        INTO v_cnt_page
        FROM USER_ACCESS
        WHERE PAGE_ID = l_page_id
        AND P_USERID = l_user_id;

    EXCEPTION
        -- Handle no_data_found exception
        WHEN NO_DATA_FOUND THEN
            v_cnt_page := 0;
        -- Handle any other exceptions within the SELECT statement
        WHEN OTHERS THEN
            v_cnt_page := 0;
    END;

    -- Construct the URL
    l_url := 'f?p=131:'|| 578 || '&session=' || v('APP_SESSION');

    -- Check if the user is not authorized for the page
    IF v_cnt_page = 0 THEN
        owa_util.redirect_url(l_url);
    END IF;

EXCEPTION
    -- Handles all other errors
    WHEN OTHERS THEN
        owa_util.redirect_url(l_url);
END;
