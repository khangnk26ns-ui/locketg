// ============================================================
// LOCKET PROFILE OVERRIDE (FAKE JOIN DATE: 05/06/2008)
// ============================================================

if ($response && $response.body) {
    let obj = JSON.parse($response.body);
    
    // Đặt ngày tạo tài khoản thành 05/06/2008
    let customDate = "2008-06-05T00:00:00.000Z";

    if (obj.created_at) {
        obj.created_at = customDate;
    }
    
    if (obj.user && obj.user.created_at) {
        obj.user.created_at = customDate;
    }

    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
