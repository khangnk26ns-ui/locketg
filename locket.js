// ============================================================
// LOCKET GOLD & CUSTOM CAPTION CONFIGURATION (FULL FINAL)
// ============================================================

if ($response && $response.body) {
    let obj = JSON.parse($response.body);
    
    if (!obj.entries) {
        obj.entries = {};
    }

    // ============================================================
    // 1. FEATURE FLAGS & GOLD OVERRIDES (FORCE ENABLE 100%)
    // ============================================================
    Object.assign(obj.entries, {
        show_gold_badge: "true",
        gold_badge_enabled: "true",
        is_gold_subscriber: "true",
        has_gold: "true",
        gold_enabled: "true",
        gold_subscriber: "true",
        gold_subscription_active: "true",
        gold_user: "true",
        subscription_status: "active",
        subscription_type: "gold",
        
        can_show_gold_badge: "true",
        force_gold_badge: "true",
        enable_gold_features: "true",
        gold_badge_visible: "true",
        
        gold_camera_enabled: "true",
        gold_post_enabled: "true",
        gold_history_enabled: "true",
        
        analytics_enabled: "false",
        crashlytics_enabled: "false"
    });

    // ============================================================
    // 2. OVERLAY DYNAMIC CAPTIONS (CHỨNG NHẬN 👑 ... ✨)
    // ============================================================
    let certItems = [
        { overlay_id: "caption:cert_cutii", source: "remote", caption: { background: { colors: ["#FF80AB", "#FF4081"] }, max_lines: 1, text: "👑 Locket xác nhận bạn cutii ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_xinhgai", source: "remote", caption: { background: { colors: ["#FFB7B2", "#FF9AA2"] }, max_lines: 1, text: "👑 Locket xác nhận bạn xinh gái ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_depchai", source: "remote", caption: { background: { colors: ["#1E88E5", "#1565C0"] }, max_lines: 1, text: "👑 Locket xác nhận bạn đẹp trai ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_dangiu", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, max_lines: 1, text: "👑 Locket xác nhận bạn dangiu ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_xm_gaidep", source: "remote", caption: { background: { colors: ["#F3A18F", "#EC2F4B"] }, max_lines: 1, text: "👑 Đã xác minh bạn là gái đẹp ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_xm_traidep", source: "remote", caption: { background: { colors: ["#42A5F5", "#1976D2"] }, max_lines: 1, text: "👑 Đã xác minh bạn là trai đẹp ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_bengoan", source: "remote", caption: { background: { colors: ["#F8BBD0", "#F48FB1"] }, max_lines: 1, text: "👑 Đã xác nhận bạn là bé ngoan ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_tuyenduong_cute", source: "remote", caption: { background: { colors: ["#E91E63", "#C2185B"] }, max_lines: 1, text: "👑 Locket tuyên dương bạn cute ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_ngau_loi", source: "remote", caption: { background: { colors: ["#37474F", "#212121"] }, max_lines: 1, text: "👑 Locket xác nhận bạn ngầu lòi ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_gioi_giang", source: "remote", caption: { background: { colors: ["#00C853", "#00897B"] }, max_lines: 1, text: "👑 Locket công nhận bạn giỏi giang ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_10_diem", source: "remote", caption: { background: { colors: ["#FFD700", "#FF8C00"] }, max_lines: 1, text: "👑 Đã xác minh bạn 10 điểm ✨", text_color: "#000000E6", type: "static_content" } },
        { overlay_id: "caption:cert_cuc_pham", source: "remote", caption: { background: { colors: ["#AA00FF", "#6200EA"] }, max_lines: 1, text: "👑 Cấp chứng nhận siêu cực phẩm ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_ngoan_xinh_yeu", source: "remote", caption: { background: { colors: ["#FFB74D", "#FF9800"] }, max_lines: 1, text: "👑 Xác nhận ngoan xinh yêu số 1 ✨", text_color: "#FFFFFF", type: "static_content" } },
        { overlay_id: "caption:cert_visual_dinh", source: "remote", caption: { background: { colors: ["#00E5FF", "#00B0FF"] }, max_lines: 1, text: "👑 Locket xác nhận Visual đỉnh chóp ✨", text_color: "#000000E6", type: "static_content" } }
    ];

    obj.entries.overlay_dynamic_captions = JSON.stringify({
        sections: [
            {
                section: "🎨 Chứng nhận của Locket",
                items: certItems
            }
        ]
    });

    // ============================================================
    // 3. CAMERA, VIDEO & UPLOAD QUALITY (OPTIMIZED)
    // ============================================================
    Object.assign(obj.entries, {
        camera: JSON.stringify({
            gold_max_duration: 60.0,
            goldMaxDuration: 60.0,
            max_duration: 60.0,
            maxDuration: 60.0,
            ultra_wide: true,
            ultraWide: true,
            volume_button: true,
            volumeButton: true,
            flash_button: true,
            telephoto: true,
            srgb: true,
            lanczos: true,
            quality_mbps: 4.5,
            qualityMbps: 4.5,
            record_audio: true,
            audio_enabled: true
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: 60.0,
            goldMaxDuration: 60.0,
            video_max_duration: 60.0,
            videoMaxDuration: 60.0,
            max_duration: 60.0,
            maxDuration: 60.0,
            trim_max_duration: 60.0,
            trimMaxDuration: 60.0,
            camera_roll_max_duration: 60.0,
            quality_mbps: 4.5,
            qualityMbps: 4.5,
            flash_button: true,
            audio_enabled: true
        }),
        live_photos: JSON.stringify({
            capture: true,
            viewing: true,
            catch_up: true,
            widget_looping_mode: "never"
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true",
        camera_roll_video_max_duration: "60.0",
        camera_roll_max_duration: "60.0",
        camera_roll_duration: "60.0",
        max_video_duration: "60.0",
        video_max_duration: "60.0",
        video_trim_max_duration: "60.0",
        trim_max_duration: "60.0",
        gold_max_duration: "60.0",
        goldMaxDuration: "60.0",
        video_quality_mbps: "4.5",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "false",
        zoom_enabled: "true",
        upload_main: "true",
        upload_main_image_quality: "0.8",
        upload_main_image_size: "1080",
        upload_thumbnail_image_quality: "0.8",
        upload_thumbnail_image_size: "360"
    });

    // ============================================================
    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999",
        celebrity_inbox_limit: "999999",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "🌟🫶🌟" },
                { threshold: 2000, emoji: "✨💟✨" },
                { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
                { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
            ]
        }),
        friend_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "✨💗✨" },
                { threshold: 2000, emoji: "✨️⭐️✨" },
                { threshold: 5000, emoji: "✨💎✨" },
                { threshold: 10000, emoji: "✨🔐💛✨" }
            ]
        }),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
    });

    // ============================================================
    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    // ============================================================
    // 6. WIDGET, THÔNG BÁO & GIAO DIỆN (JOURNAL / PROFILE)
    // ============================================================
    Object.assign(obj.entries, {
        widget_frame_event_max_images: "5",
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenNever",
        widget_frame_event: JSON.stringify({
            uid: "midautumn_2026",
            url: "https://i.ibb.co/hFqmnmsV/kuromi-removebg-preview.png",
            use_local_time_zone: true,
            placement: "below",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59"
        }),
        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: true,
            compact_header: true,
            friends_button: true,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    // ============================================================
    // 7. HỆ THỐNG, CACHE & STORAGE CDN
    // ============================================================
    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({
            "firebasestorage.googleapis.com": "cdn.locketcamera.com"
        }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000",
        image_cache_max_size: "400000000",
        history_cache_age_days: "1000",
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
        share_history_prompt_enabled: "false",
        use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true",
        persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true"
    });

    // ============================================================
    // 8. OVERLAY & FULL CUSTOM CAPTIONS (KHÔI PHỤC ĐỦ 100%)
    // ============================================================
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location",
            "weather", "time", "streak", "star_sign", "party_time", "locket_count",
            "halloween_2026", "autumn_2026", "christmas_eve_2026", "christmas_day_2026", "new_years_eve_2026", "new_years_day_2027", "new_years_day_2027_alternate", "namgioi_19_11",
            "kaka", "cu", "tuat", "snake_vibes", "du_an_ma", "toi_nho_em", "miss_you", "em_nho_anhh", "nho_anh_phien", "i_love_you",
            "yeu_cuc_dang", "yeu_emmm", "yeu_anhhh", "baby_love", "muon_duoc_om", "cho_hun_mieng", "me_anh_me_ngu",
            "be_be_can_do", "iu_thi_noi", "iu_hong_thi_bao", "anh_thuong_em", "yeu_em_nhiem_vu", "crush_nhin", "ngoai_le_cua_em",
            "dang_ban_tuong_tu", "mac_bay_tinh_yeu", "cert_cutii", "cert_xinhgai", "cert_depchai", "cert_dangiu", "cert_xm_gaidep", "cert_xm_traidep",
            "cert_bengoan", "cert_tuyenduong_cute", "cert_ngau_loi", "cert_gioi_giang", "cert_10_diem", "cert_cuc_pham",
            "cert_ngoan_xinh_yeu", "cert_visual_dinh"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "🎨 General",
                items: [
                    { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                    { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                    { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                    { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                    { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                    { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                    { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                    { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                    { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                    { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                    { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } }
                ]
            },
            {
                section: "🎨 Holiday Caption",
                items: [
                    { overlay_id: "caption:halloween_2026", source: "remote", caption: { background: { colors: ["#150804", "#C8540D"] }, icon: { data: "🎃", type: "emoji" }, max_lines: 1, text: "Halloween", localized_text: { en: "Halloween", vn: "Halloween" }, text_color: "#FFB182", type: "static_content" } },
                    { overlay_id: "caption:autumn_2026", source: "remote", caption: { background: { colors: ["#FFE0A0", "#F6A53A"] }, icon: { data: "🍂", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Thu", localized_text: { en: "Xin chào Mùa Thu", vn: "Xin chào Mùa Thu" }, text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:christmas_eve_2026", source: "remote", caption: { background: { colors: ["#2FA85F", "#176B3A"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:christmas_day_2026", source: "remote", caption: { background: { colors: ["#E53935", "#A81818"] }, icon: { data: "🎄", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:new_years_eve_2026", source: "remote", caption: { background: { colors: ["#FFC64B", "#FFEDBF"] }, icon: { data: "🥂", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" }, text_color: "#643F00", type: "static_content" } },
                    { overlay_id: "caption:new_years_day_2027", source: "remote", caption: { background: { colors: ["#3B00EC", "#823FFF"] }, icon: { data: "💫", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" }, text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:new_years_day_2027_alternate", source: "remote", caption: { background: { colors: ["#FF0062", "#FF783F"] }, max_lines: 1, text: "2027", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:namgioi_19_11", source: "remote", caption: { background: { colors: ["#1E3C72", "#2A5298"] }, icon: { data: "👔", type: "emoji" }, max_lines: 1, text: "Chúc mừng Ngày Quốc tế Nam giới 19/11", localized_text: { en: "Happy International Men's Day", vn: "Chúc mừng Ngày Quốc tế Nam giới 19/11" }, text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Decorative by kaka",
                items: [
                    { overlay_id: "caption:kaka", source: "remote", caption: { background: { colors: ["#B8E7FF", "#A8F5D0", "#DCCBFF"] }, max_lines: 1, text: "💻 NMS", text_color: "#183153", type: "static_content" } },
                    { overlay_id: "caption:cu", source: "remote", caption: { background: { colors: ["#FFD6A5", "#FFF1A8", "#FFC4D6"] }, max_lines: 1, text: "Cu 🐎", text_color: "#633B24", type: "static_content" } },
                    { overlay_id: "caption:tuat", source: "remote", caption: { background: { colors: ["#2C1A0E", "#5D4037", "#D7A86E"] }, icon: { data: "🐕", type: "emoji" }, max_lines: 1, text: "Tuất", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:snake_vibes", source: "remote", caption: { background: { colors: ["#2E7D32", "#66BB6A"] }, icon: { data: "🐍", type: "emoji" }, max_lines: 1, text: "Snake Vibes", localized_text: { en: "Snake Vibes", vn: "Chất rắn" }, text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:du_an_ma", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "👻", type: "emoji" }, max_lines: 1, text: "dự án ma", text_color: "#FFFFFFE6", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Tình yêu & Cơm chó 💕",
                items: [
                    { overlay_id: "caption:toi_nho_em", source: "remote", caption: { background: { colors: ["#FFFFFF", "#6D9EEB"] }, max_lines: 1, text: "보고 싶어 🥺", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "caption:miss_you", source: "remote", caption: { background: { colors: ["#EC0C00", "#FF493F"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Miss you", text_color: "#FFFFFFDB", type: "static_content" } },
                    { overlay_id: "caption:em_nho_anhh", source: "remote", caption: { background: { colors: ["#F2B8CF", "#E8C8EE", "#D7C9F5"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "em nhớ anhh", text_color: "#69465F", type: "static_content" } },
                    { overlay_id: "caption:nho_anh_phien", source: "remote", caption: { background: { colors: ["#F0B5CB", "#F6D0DF", "#DCCAF0"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "nhớ anh tới mức hơi phiền", text_color: "#70445A", type: "static_content" } },
                    { overlay_id: "caption:i_love_you", source: "remote", caption: { background: { colors: ["#F4BFD3", "#F9D9CF", "#DCCDF5"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "i love you", text_color: "#70465F", type: "static_content" } },
                    { overlay_id: "caption:yeu_cuc_dang", source: "remote", caption: { background: { colors: ["#F2B5C8", "#F8D5D9", "#F6E5D2"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "yêu cục dàng", text_color: "#754454", type: "static_content" } },
                    { overlay_id: "caption:yeu_emmm", source: "remote", caption: { background: { colors: ["#F2AFC6", "#F7C9D9", "#E5CFF4"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "Yeu Emmm", text_color: "#70445C", type: "static_content" } },
                    { overlay_id: "caption:yeu_anhhh", source: "remote", caption: { background: { colors: ["#B8C9F2", "#D5DDF8", "#E8CFF0"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "Yeu Anhhh", text_color: "#414C72", type: "static_content" } },
                    { overlay_id: "caption:baby_love", source: "remote", caption: { background: { colors: ["#FFB6C1", "#FF69B4", "#FF1493"] }, icon: { data: "🧸", type: "emoji" }, max_lines: 1, text: "Baby Love 💖", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:muon_duoc_om", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "🫂", type: "emoji" }, max_lines: 1, text: "Muốn được ôm", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:cho_hun_mieng", source: "remote", caption: { background: { colors: ["#F3AFC7", "#F8D0D8", "#F4C9BB"] }, icon: { data: "😘", type: "emoji" }, max_lines: 1, text: "cho hun miếng coi", text_color: "#754252", type: "static_content" } },
                    { overlay_id: "caption:me_anh_me_ngu", source: "remote", caption: { background: { colors: ["#C4C8EF", "#DED3F4", "#EBCDE4"] }, icon: { data: "💤", type: "emoji" }, max_lines: 1, text: "mê anh hơn mê ngủ", text_color: "#4F4770", type: "static_content" } },
                    { overlay_id: "caption:be_be_can_do", source: "remote", caption: { background: { colors: ["#F4C2D5", "#F9E1E8", "#E9D4F5"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "em bé cần được dỗ", text_color: "#75495F", type: "static_content" } },
                    { overlay_id: "caption:iu_thi_noi", source: "remote", caption: { background: { colors: ["#F4BFD0", "#E9C7EF", "#D7D0F4"] }, icon: { data: "🤭", type: "emoji" }, max_lines: 1, text: "iu thì nói, đừng có ngại", text_color: "#68465F", type: "static_content" } },
                    { overlay_id: "caption:iu_hong_thi_bao", source: "remote", caption: { background: { colors: ["#F1B5CE", "#F8D6E4", "#E8C8F0"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "iu hong thì bảo", text_color: "#70445E", type: "static_content" } },
                    { overlay_id: "caption:anh_thuong_em", source: "remote", caption: { background: { colors: ["#E9B9CF", "#F5D5DF", "#D8C8F0"] }, icon: { data: "🥹", type: "emoji" }, max_lines: 1, text: "anh có thương em thiệt hong", text_color: "#70465D", type: "static_content" } },
                    { overlay_id: "caption:yeu_em_nhiem_vu", source: "remote", caption: { background: { colors: ["#E9B7CD", "#F3D0DD", "#E4C6F1"] }, icon: { data: "🫡", type: "emoji" }, max_lines: 1, text: "yêu em là nhiệm vụ cả đời", text_color: "#71455F", type: "static_content" } },
                    { overlay_id: "caption:crush_nhin", source: "remote", caption: { background: { colors: ["#F0C0D5", "#E0C8EF", "#C8D5F3"] }, icon: { data: "🫠", type: "emoji" }, max_lines: 1, text: "crush nhìn em một cái là xong", text_color: "#594664", type: "static_content" } },
                    { overlay_id: "caption:ngoai_le_cua_em", source: "remote", caption: { background: { colors: ["#E7B8D0", "#E4D0F2", "#C8D8F2"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "anh là ngoại lệ của em", text_color: "#584762", type: "static_content" } },
                    { overlay_id: "caption:dang_ban_tuong_tu", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "💭", type: "emoji" }, max_lines: 1, text: "Đang bận tương tư", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:mac_bay_tinh_yeu", source: "remote", caption: { background: { colors: ["#EE9CA7", "#FFDDE1"] }, icon: { data: "💘", type: "emoji" }, max_lines: 1, text: "Mắc bẫy tình yêu", text_color: "#000000E6", type: "static_content" } }
                ]
            }
        ])
    });

    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
