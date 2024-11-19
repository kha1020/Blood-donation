

const provincesData = {
  an_giang: {
    districts: [
      {
        value: 'long_xuyen',
        label: 'Thành phố Long Xuyên',
        wards: [
          { value: 'my_binh', label: 'Phường Mỹ Bình' },
          { value: 'my_phu', label: 'Phường Mỹ Phú' },
        ],
      },
      {
        value: 'chau_doc',
        label: 'Thành phố Châu Đốc',
        wards: [
          { value: 'chau_phu', label: 'Phường Châu Phú' },
          { value: 'chau_doc', label: 'Phường Châu Đốc' },
        ],
      },
      {
        value: 'tan_chau',
        label: 'Huyện Tân Châu',
        wards: [
          { value: 'tan_an', label: 'Xã Tân An' },
          { value: 'tan_hai', label: 'Xã Tân Hải' },
        ],
      },
      {
        value: 'pho_bi_nh',
        label: 'Huyện Phú Tân',
        wards: [
          { value: 'phu_tan', label: 'Xã Phú Tân' },
          { value: 'phu_ha', label: 'Xã Phú Hòa' },
        ],
      },
    ],
  },
  ha_noi: {
    districts: [
      {
        value: 'hoan_kiem',
        label: 'Quận Hoàn Kiếm',
        wards: [
          { value: 'hang_bat', label: 'Phường Hàng Bạc' },
          { value: 'hang_boi', label: 'Phường Hàng Bôi' },
        ],
      },
      {
        value: 'hai_ba_trung',
        label: 'Quận Hai Bà Trưng',
        wards: [
          { value: 'ba_minh', label: 'Phường Bà Minh' },
          { value: 'ba_trieu', label: 'Phường Bà Triệu' },
        ],
      },
      {
        value: 'dong_da',
        label: 'Quận Đống Đa',
        wards: [
          { value: 'cua_dan', label: 'Phường Cửa Đông' },
          { value: 'phu_nhuan', label: 'Phường Phú Nhuận' },
        ],
      },
      {
        value: 'cau_giay',
        label: 'Quận Cầu Giấy',
        wards: [
          { value: 'my_dinh', label: 'Phường Mỹ Đình' },
          { value: 'duong_dong', label: 'Phường Dương Đình' },
        ],
      },
      {
        value: 'tay_ho',
        label: 'Quận Tây Hồ',
        wards: [
          { value: 'tay_ho', label: 'Phường Tây Hồ' },
          { value: 'co_nhue', label: 'Phường Cổ Nhuế' },
        ],
      },
    ],
  },
  ho_chi_minh: {
    districts: [
      {
        value: '1',
        label: 'Quận 1',
        wards: [
          { value: 'ben_nghe', label: 'Phường Bến Nghé' },
          { value: 'ben_thanh', label: 'Phường Bến Thành' },
        ],
      },
      {
        value: '2',
        label: 'Quận 2',
        wards: [
          { value: 'thao_dien', label: 'Phường Thảo Điền' },
          { value: 'binh_an', label: 'Phường Bình An' },
        ],
      },
      {
        value: '3',
        label: 'Quận 3',
        wards: [
          { value: 'vo_thang', label: 'Phường Võ Thắng' },
          { value: 'co_giang', label: 'Phường Cô Giang' },
        ],
      },
      {
        value: '4',
        label: 'Quận 4',
        wards: [
          { value: 'binh_thuan', label: 'Phường Bình Thuận' },
          { value: 'phu_my', label: 'Phường Phú Mỹ' },
        ],
      },
      {
        value: '5',
        label: 'Quận 5',
        wards: [
          { value: 'chieu_hau', label: 'Phường Chiêu Hầu' },
          { value: 'hoa_khe', label: 'Phường Hoa Khê' },
        ],
      },
      {
        value: '6',
        label: 'Quận 6',
        wards: [
          { value: 'binh_trung', label: 'Phường Bình Trung' },
          { value: 'binh_gio', label: 'Phường Bình Gió' },
        ],
      },
    ],
  },
  da_nang: {
    districts: [
      {
        value: 'son_trà',
        label: 'Quận Sơn Trà',
        wards: [
          { value: 'my_khe', label: 'Phường Mỹ Khê' },
          { value: 'an_hai_west', label: 'Phường An Hải Tây' },
        ],
      },
      {
        value: 'hai_chau',
        label: 'Quận Hải Châu',
        wards: [
          { value: 'thach_thang', label: 'Phường Thạch Thang' },
          { value: 'hoa_cao', label: 'Phường Hòa Cường' },
        ],
      },
      {
        value: 'cam_le',
        label: 'Quận Cẩm Lệ',
        wards: [
          { value: 'hoa_thanh', label: 'Phường Hòa Thạnh' },
          { value: 'hoa_quy', label: 'Phường Hòa Quý' },
        ],
      },
      {
        value: 'lien_chieu',
        label: 'Quận Liên Chiểu',
        wards: [
          { value: 'hoa_xuan', label: 'Phường Hòa Xuân' },
          { value: 'hoa_phu', label: 'Phường Hòa Phú' },
        ],
      },
      {
        value: 'ngu_hanh_son',
        label: 'Quận Ngũ Hành Sơn',
        wards: [
          { value: 'hoa_quy', label: 'Phường Hòa Quý' },
          { value: 'my_khe', label: 'Phường Mỹ Khê' },
        ],
      },
    ],
  },
  hai_phong: {
    districts: [
      {
        value: 'hong_bang',
        label: 'Quận Hồng Bàng',
        wards: [
          { value: 'quang_trung', label: 'Phường Quang Trung' },
          { value: 'ly_thai_tong', label: 'Phường Lý Thái Tổ' },
        ],
      },
      {
        value: 'ngo_quyen',
        label: 'Quận Ngô Quyền',
        wards: [
          { value: 'thanh_binh', label: 'Phường Thanh Bình' },
          { value: 'thanh_tam', label: 'Phường Thanh Tâm' },
        ],
      },
      {
        value: 'kien_an',
        label: 'Quận Kiến An',
        wards: [
          { value: 'kien_an', label: 'Phường Kiến An' },
          { value: 'van_tra', label: 'Phường Văn Tra' },
        ],
      },
      {
        value: 'thuy_nguyen',
        label: 'Huyện Thủy Nguyên',
        wards: [
          { value: 'phu_luu', label: 'Xã Phú Lưu' },
          { value: 'ngoc_son', label: 'Xã Ngọc Sơn' },
        ],
      },
    ],
  },
  thanh_hoa: {
    districts: [
      {
        value: 'thanh_hoa',
        label: 'Thành phố Thanh Hóa',
        wards: [
          { value: 'tan_huu', label: 'Phường Tân Hữu' },
          { value: 'tan_binh', label: 'Phường Tân Bình' },
        ],
      },
      {
        value: 'sam_son',
        label: 'Thành phố Sầm Sơn',
        wards: [
          { value: 'hai_bac', label: 'Phường Hải Bắc' },
          { value: 'hai_duong', label: 'Phường Hải Dương' },
        ],
      },
      {
        value: 'hoang_hóa',
        label: 'Huyện Hoằng Hóa',
        wards: [
          { value: 'hoang_hai', label: 'Xã Hoằng Hải' },
          { value: 'hoang_quoc', label: 'Xã Hoằng Quốc' },
        ],
      },
      {
        value: 'thanh_tri',
        label: 'Huyện Thanh Trì',
        wards: [
          { value: 'thanh_lam', label: 'Xã Thanh Lâm' },
          { value: 'thanh_hung', label: 'Xã Thanh Hưng' },
        ],
      },
    ],
  },
  nghe_an: {
    districts: [
      {
        value: 'vinh',
        label: 'Thành phố Vinh',
        wards: [
          { value: 'cam_khe', label: 'Phường Cẩm Khê' },
          { value: 'ha_tinh', label: 'Phường Hà Tĩnh' },
        ],
      },
      {
        value: 'ha_tinh',
        label: 'Thị xã Cửa Lò',
        wards: [
          { value: 'nhat_tan', label: 'Phường Nhật Tân' },
          { value: 'binh_tan', label: 'Phường Bình Tân' },
        ],
      },
      {
        value: 'nghe_an',
        label: 'Huyện Nghĩa Đàn',
        wards: [
          { value: 'nghe_an', label: 'Xã Nghĩa An' },
          { value: 'nghe_hoa', label: 'Xã Nghĩa Hoa' },
        ],
      },
      {
        value: 'tuong_duong',
        label: 'Huyện Tương Dương',
        wards: [
          { value: 'tien_thanh', label: 'Xã Tiến Thành' },
          { value: 'ha_tinh', label: 'Xã Hà Tĩnh' },
        ],
      },
    ],
  },
  nam_dinh: {
    districts: [
      {
        value: 'nam_dinh',
        label: 'Thành phố Nam Định',
        wards: [
          { value: 'hoang_ha', label: 'Phường Hoàng Hà' },
          { value: 'tran_dai_nghia', label: 'Phường Trần Đại Nghĩa' },
        ],
      },
      {
        value: 'my_loc',
        label: 'Huyện Mỹ Lộc',
        wards: [
          { value: 'my_loc', label: 'Xã Mỹ Lộc' },
          { value: 'my_binh', label: 'Xã Mỹ Bình' },
        ],
      },
      {
        value: 'truc_ninh',
        label: 'Huyện Trực Ninh',
        wards: [
          { value: 'truc_quang', label: 'Xã Trực Quang' },
          { value: 'truc_ninh', label: 'Xã Trực Ninh' },
        ],
      },
      {
        value: 'xuan_truong',
        label: 'Huyện Xuân Trường',
        wards: [
          { value: 'xuan_truong', label: 'Xã Xuân Trường' },
          { value: 'xuan_bang', label: 'Xã Xuân Bảng' },
        ],
      },
    ],
  },
  binh_duong: {
    districts: [
      {
        value: 'thuan_an',
        label: 'Thành phố Thuận An',
        wards: [
          { value: 'an_phu', label: 'Phường An Phú' },
          { value: 'binh_thuan', label: 'Phường Bình Thuận' },
        ],
      },
      {
        value: 'di_an',
        label: 'Thành phố Dĩ An',
        wards: [
          { value: 'an_binh', label: 'Phường An Bình' },
          { value: 'binh_thang', label: 'Phường Bình Thắng' },
        ],
      },
      {
        value: 'bac_tan_uyen',
        label: 'Huyện Bắc Tân Uyên',
        wards: [
          { value: 'lac_an', label: 'Xã Lạc An' },
          { value: 'tanh_hai', label: 'Xã Tánh Hải' },
        ],
      },
      {
        value: 'phu_giao',
        label: 'Huyện Phú Giáo',
        wards: [
          { value: 'phu_giao', label: 'Xã Phú Giáo' },
          { value: 'vinh_hoa', label: 'Xã Vĩnh Hòa' },
        ],
      },
    ],
  },
  hai_duong: {
    districts: [
      {
        value: 'hai_duong',
        label: 'Thành phố Hải Dương',
        wards: [
          { value: 'duong_hoi', label: 'Phường Đường Hơi' },
          { value: 'hoang_tan', label: 'Phường Hoàng Tân' },
        ],
      },
      {
        value: 'binh_gia',
        label: 'Huyện Bình Giang',
        wards: [
          { value: 'binh_gia', label: 'Xã Bình Giang' },
          { value: 'vu_thang', label: 'Xã Vũ Thắng' },
        ],
      },
      {
        value: 'tu_ky',
        label: 'Huyện Tứ Kỳ',
        wards: [
          { value: 'tu_ky', label: 'Xã Tứ Kỳ' },
          { value: 'phu_nam', label: 'Xã Phú Nam' },
        ],
      },
      {
        value: 'kim_thanh',
        label: 'Huyện Kim Thành',
        wards: [
          { value: 'kim_thanh', label: 'Xã Kim Thành' },
          { value: 'tuan_thanh', label: 'Xã Tuân Thành' },
        ],
      },
    ],
  },
  quang_ninh: {
    districts: [
      {
        value: 'ha_long',
        label: 'Thành phố Hạ Long',
        wards: [
          { value: 'ha_phong', label: 'Phường Hà Phong' },
          { value: 'ha_nam', label: 'Phường Hà Nam' },
        ],
      },
      {
        value: 'cam_pha',
        label: 'Thành phố Cẩm Phả',
        wards: [
          { value: 'cam_thuy', label: 'Phường Cam Thủy' },
          { value: 'cam_phu', label: 'Phường Cam Phú' },
        ],
      },
      {
        value: 'mong_cai',
        label: 'Thành phố Móng Cái',
        wards: [
          { value: 'moc_bai', label: 'Phường Mốc Bài' },
          { value: 'hai_yen', label: 'Phường Hải Yên' },
        ],
      },
      {
        value: 'van_dong',
        label: 'Huyện Vân Đồn',
        wards: [
          { value: 'ha_lai', label: 'Xã Hạ Lai' },
          { value: 'minh_hai', label: 'Xã Minh Hải' },
        ],
      },
    ],
  },
  kien_giang: {
    districts: [
      {
        value: 'ra_anh',
        label: 'Thành phố Rạch Giá',
        wards: [
          { value: 'an_ninh', label: 'Phường An Ninh' },
          { value: 'vinh_quang', label: 'Phường Vĩnh Quang' },
        ],
      },
      {
        value: 'ha_tien',
        label: 'Thành phố Hà Tiên',
        wards: [
          { value: 'ha_tien', label: 'Phường Hà Tiên' },
          { value: 'phu_tan', label: 'Phường Phú Tân' },
        ],
      },
      {
        value: 'giong_re',
        label: 'Huyện Giồng Riềng',
        wards: [
          { value: 'giong_re', label: 'Xã Giồng Riềng' },
          { value: 'thanh_hoa', label: 'Xã Thanh Hoa' },
        ],
      },
      {
        value: 'u_minh_thuong',
        label: 'Huyện U Minh Thượng',
        wards: [
          { value: 'u_minh', label: 'Xã U Minh' },
          { value: 'minh_khai', label: 'Xã Minh Khai' },
        ],
      },
    ],
  },
  lam_dong: {
    districts: [
      {
        value: 'da_lat',
        label: 'Thành phố Đà Lạt',
        wards: [
          { value: 'my_tram', label: 'Phường Mỹ Tràm' },
          { value: 'phu_tho', label: 'Phường Phú Thọ' },
        ],
      },
      {
        value: 'bao_loc',
        label: 'Thành phố Bảo Lộc',
        wards: [
          { value: 'loc_tan', label: 'Phường Lộc Tân' },
          { value: 'loc_ho', label: 'Phường Lộc Hồ' },
        ],
      },
      {
        value: 'duc_trong',
        label: 'Huyện Đức Trọng',
        wards: [
          { value: 'duc_trong', label: 'Xã Đức Trọng' },
          { value: 'ha_tan', label: 'Xã Hà Tân' },
        ],
      },
      {
        value: 'lac_duong',
        label: 'Huyện Lạc Dương',
        wards: [
          { value: 'lac_duong', label: 'Xã Lạc Dương' },
          { value: 'duc_trong', label: 'Xã Đức Trọng' },
        ],
      },
    ],
  },
  dak_lak: {
    districts: [
      {
        value: 'buon_ma_thuot',
        label: 'Thành phố Buôn Ma Thuột',
        wards: [
          { value: 'thang_long', label: 'Phường Thắng Lợi' },
          { value: 'tuan_anh', label: 'Phường Tân An' },
        ],
      },
      {
        value: 'krong_no',
        label: 'Huyện Krông Nô',
        wards: [
          { value: 'quyet_thang', label: 'Xã Quyết Thắng' },
          { value: 'nam_ka', label: 'Xã Nam Ka' },
        ],
      },
      {
        value: 'krong_bok',
        label: 'Huyện Krông Búk',
        wards: [
          { value: 'krong_bok', label: 'Xã Krông Búk' },
          { value: 'krong_no', label: 'Xã Krông Nô' },
        ],
      },
      {
        value: 'ea_kmat',
        label: 'Huyện Ea Kar',
        wards: [
          { value: 'ea_kmat', label: 'Xã Ea Kmat' },
          { value: 'ea_kar', label: 'Xã Ea Kar' },
        ],
      },
    ],
  },
  bac_ninh: {
    districts: [
      {
        value: 'bac_ninh',
        label: 'Thành phố Bắc Ninh',
        wards: [
          { value: 'da_phuc', label: 'Phường Đa Phúc' },
          { value: 'tien An', label: 'Phường Tiên An' },
        ],
      },
      {
        value: 'tu_dinh',
        label: 'Huyện Từ Sơn',
        wards: [
          { value: 'tu_dinh', label: 'Xã Từ Đình' },
          { value: 'tu_ha', label: 'Xã Từ Hà' },
        ],
      },
      {
        value: 'thuan thanh',
        label: 'Huyện Thuận Thành',
        wards: [
          { value: 'thuan_hanh', label: 'Xã Thuận Hạnh' },
          { value: 'thuan_quang', label: 'Xã Thuận Quang' },
        ],
      },
      {
        value: 'quoc_tu_giam',
        label: 'Huyện Quế Võ',
        wards: [
          { value: 'quoc_tu_giam', label: 'Xã Quốc Tử Giám' },
          { value: 'hoa_xuan', label: 'Xã Hoa Xuân' },
        ],
      },
    ],
  },
};

export default provincesData;
