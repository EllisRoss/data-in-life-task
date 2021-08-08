export type Goods = {
    gid: string; // example "261",
    gartikul: string; // example "K01-P",
    gname: string; // example "K01-P",
    ggood_code: string; // example "0",
    gquantity: string; // example "-1966.00",
    gquantity_reserved: string; // example "14560.00",
    ged: string; // example "",
    gprice_cat_id: string; // example "0",
    gweight: string; // example "0.000000",
    gstore: string; // example "1",
    gvendor: string; // example "no",
    gnote_file: string; // example "good_261.htm",
    gpict: string; // example "261_0.png",
    gvendor_id: string; // example "0",
    gstate: string; // example "",
    gnever_visible: string; // example "0",
    ggroup_id: string; // example "218",
    glast_change_date: string; // example "2018-07-12 15:03:23",
    gprice: string; // example "8377.00",
    gcurrency: string; // example "5",
    order_example_paket_value: string; // example "",
    gallery_1_value: {
        id: string; // example "1695",
        title: string; // example "K01-P.jpg",
        description: string; // example "",
        width: string; // example "800",
        height: string; // example "600",
        active: string; // example "yes",
        group_id: string; // example "1",
        file_name: string; // example "K01-P.jpg",
        file_id: string; // example "000001695.jpg",
        owner_id: string; // example "1",
        file: string; // example "000001695.jpg"
    },
    Priority_value: number,
    DiametrStock_value: string; // example "0",
    DiametrCyl_value: string; // example "0",
    Width_value: string; // example "0",
    Thickness_value: string; // example "0",
    Tolerance_value: string; // example "",
    OCT_value: string; // example "",
    TY12_value: string; // example "",
    small_picture_value: {
        id: string; // example "774",
        title: string; // example "k01-p.png",
        description: string; // example "",
        width: string; // example "115",
        height: string; // example "110",
        active: string; // example "yes",
        group_id: string; // example "1",
        file_name: string; // example "k01-p.png",
        file_id: string; // example "000000774.png",
        owner_id: string; // example "1",
        file: string; // example "000000774.png"
    },
    drawing_value: {
        id: string; // example "1155",
        title: string; // example "K01-P.png",
        description: string; // example "",
        width: string; // example "350",
        height: string; // example "278",
        active: string; // example "yes",
        group_id: string; // example "1",
        file_name: string; // example "K01-P.png",
        file_id: string; // example "000001155.png",
        owner_id: string; // example "1",
        file: string; // example "000001155.png"
    },
    br_drawing_value: boolean,
    material_acetal_r_value: boolean,
    material_poliuritan_gu_value: boolean,
    material_poliuritan_gu_t_value: boolean,
    material_poliuritan_gu_r_value: boolean,
    material_rezina_value: boolean,
    material_rezina_p_value: boolean,
    parameters_mounting_value: string; // example "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n\t<colgroup>\r\n\t\t<col />\r\n\t\t<col span=\"2\" />\r\n\t\t<col />\r\n\t</colgroup>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<th colspan=\"2\">\r\n\t\t\t\tШероховатость поверхности,(мм)</th>\r\n\t\t\t<th>\r\n\t\t\t\tRt max</th>\r\n\t\t\t<th>\r\n\t\t\t\tRa</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th colspan=\"2\">\r\n\t\t\t\tСопряженная поверхность для<br />\r\n\t\t\t\tуплотнений на основе полиуретана / резины</th>\r\n\t\t\t<td>\r\n\t\t\t\t< 2,5</td>\r\n\t\t\t<td>\r\n\t\t\t\t< 0,1-0,5</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th colspan=\"2\">\r\n\t\t\t\tСопряженная поверхность для уплотнений из PTFE</th>\r\n\t\t\t<td>\r\n\t\t\t\t< 2,0</td>\r\n\t\t\t<td>\r\n\t\t\t\t< 0,05-0,3</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th colspan=\"2\">\r\n\t\t\t\tОснование канавки</th>\r\n\t\t\t<td>\r\n\t\t\t\t< 6,3</td>\r\n\t\t\t<td>\r\n\t\t\t\t< 1,6</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th colspan=\"2\">\r\n\t\t\t\tБуртик</th>\r\n\t\t\t<td>\r\n\t\t\t\t< 15,0</td>\r\n\t\t\t<td>\r\n\t\t\t\t< 3,0</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th colspan=\"2\">\r\n\t\t\t\tНесущая часть</th>\r\n\t\t\t<td>\r\n\t\t\t\t> 50%</td>\r\n\t\t\t<td>\r\n\t\t\t\t< 95%</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<p>\r\n\t </p>\r\n",
    parameters_material_value: string; // example "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n\t<colgroup>\r\n\t\t<col />\r\n\t\t<col />\r\n\t\t<col />\r\n\t\t<col />\r\n\t</colgroup>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\tТемпература эксплуатации</th>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\tV макс.</th>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\tP макс.</th>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\tМатериал</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t\t-50°C...+100°C</td>\r\n\t\t\t<td>\r\n\t\t\t\t0,5 м/с</td>\r\n\t\t\t<td>\r\n\t\t\t\t400 bar</td>\r\n\t\t\t<td>\r\n\t\t\t\tПолиуретан PU1</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t\t-30°C...+100°C</td>\r\n\t\t\t<td>\r\n\t\t\t\t0,5 м/с</td>\r\n\t\t\t<td>\r\n\t\t\t\t160 bar</td>\r\n\t\t\t<td>\r\n\t\t\t\tРезина Rub1</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t\t-20°C...+250°C</td>\r\n\t\t\t<td>\r\n\t\t\t\t0,5 м/с</td>\r\n\t\t\t<td>\r\n\t\t\t\t160 bar</td>\r\n\t\t\t<td>\r\n\t\t\t\tРезина фторкаучуковая Rub2</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t\t-60°C...+200°C</td>\r\n\t\t\t<td>\r\n\t\t\t\t-</td>\r\n\t\t\t<td>\r\n\t\t\t\t-</td>\r\n\t\t\t<td>\r\n\t\t\t\tсиликон</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<p>\r\n\t </p>\r\n",
    parameters_one_table_value: string; // example "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t&#216;D H9</p>\r\n\t\t\t</th>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t&#216;d h10</p>\r\n\t\t\t</th>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tL +0,2</p>\r\n\t\t\t</th>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tRmax</p>\r\n\t\t\t</th>\r\n\t\t\t<th rowspan=\"2\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tc</p>\r\n\t\t\t</th>\r\n\t\t\t<th colspan=\"4\">\r\n\t\t\t\t<p>Максимальный радиальный экструзионный зазор s*</p>\r\n\t\t\t</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t20 bar</p>\r\n\t\t\t</th>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t100 bar</p>\r\n\t\t\t</th>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t200 bar</p>\r\n\t\t\t</th>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t400 bar</p>\r\n\t\t\t</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t&#8805; 13 ... &#8804; 25</p>\r\n\t\t\t</th>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tD - 8</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t6,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,4</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t3,5</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,33</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,18</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,11</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,05</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t> 25 ... &#8804; 50</p>\r\n\t\t\t</th>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tD - 10</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t7,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,4</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t4,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,37</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,22</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,16</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,10</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t> 50 ... &#8804; 75</p>\r\n\t\t\t</th>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tD - 12</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t8,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,4</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t4,5</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,42</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,27</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,20</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,14</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t> 75 ... &#8804; 150</p>\r\n\t\t\t</th>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tD - 15</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t10,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,4</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t5,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,46</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,31</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,25</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,19</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t> 150 ... &#8804; 300</p>\r\n\t\t\t</th>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tD - 20</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t12,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,4</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t6,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,54</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,39</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,32</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,26</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t> 300 ... &#8804; 500</p>\r\n\t\t\t</th>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tD - 25</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t18,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,4</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t8,5</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,61</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,46</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,39</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,33</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t> 500 ... &#8804; 750</p>\r\n\t\t\t</th>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tD - 30</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t20,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,4</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t10,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,67</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,52</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,45</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,39</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t> 750 ...</p>\r\n\t\t\t</th>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tD - 40</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t26,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,4</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t13,0</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,67</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,52</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,45</p>\r\n\t\t\t</td>\r\n\t\t\t<td>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t0,39</p>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n<p>* - экструзионный зазор применительно для температуры до +70°С, при более высокой температуре размер s необходимо уменьшить.</p>\r\n",
    can_be_ordered_value: boolean,
    d_max_value: number,
    h_max_value: number,
    DD_max_value: number,
    d_min_value: number,
    h_min_value: number,
    DD_min_value: number,
    catalog_description_value: string; // example "Манжета несимметричная<br/>воротниковая",
    order_example_value: string; // example "D=97;d=85;h=12",
    order_example_p_value: string; // example "",
    profile3d_2_value: string; // example "",
    profile_from_pdf_value: {
        id: string; // example "1465",
        title: string; // example "k01-p.png",
        description: string; // example "",
        width: string; // example "1021",
        height: string; // example "326",
        active: string; // example "yes",
        group_id: string; // example "1",
        file_name: string; // example "k01-p.png",
        file_id: string; // example "000001465.png",
        owner_id: string; // example "1",
        file: string; // example "000001465.png"
    },
    seo_part_1_value: string; // example "Гидравлические манжеты",
    seo_part_2_value: string; // example "поршня",
    gnote: string; // example "<p>Манжета несимметричная для уплотнения поршня. Жесткая посадка на внутренний диаметре обеспечивает стабильную фиксацию в монтажной полости.</p>\r\n",
    picture_url: string; // example "http://www.talanmash.ru/images/goods/261_0.png"
}

export type Product = {
    rid: string;            // example "218"
    rtime: string           // "2013-12-23 13:06:21"
    resource_id: string     // example "0"
    rname: string           // example "Манжеты гидравлические для поршня"
    rparent: string         // example "208"
    rlevel: string          // example "00h000000"
    urlalias: string        // example "manzhety_gidravl_for_porshn"
    rposition: string       // example "10"
    rtitle: string          // example ""
    icon: string            // example "/images/pm/000001288.png"
    description: string     // example <p>Полиуретановые или резиновые...</p>
    goods: Goods[]
};

export type ProductInCart = {
    id: string
    amount: number
    price: number;
}
