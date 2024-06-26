import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'vaibhav',
      email: 'vaibhavrandale800@gmail.com',
      password: bcrypt.hashSync('80079'),
    },
  ],
  movies: [
    {
      arrno: '1',
      Title: 'Motu Patlu in the Game of Zones',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdin3eraRRQH3PhCT3QI2Xh7fyIBI2ZwgiusRclhcdJTwtkrlaMW4HkCPqTPQzh6VPRzUMI4yAHu6z13DLD5seeIe1LOCV1R8VAF.png?r=8c9',
      Description:
        'A board game becomes all too real for buddies Motu and Patlu when they get transported into its world of monsters, magic and mayhem.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeNski15muuNP9vg-DwZgQlyCy9qn-eli4yEu2GzSDMoMpL_g8aDnEMm-yK0lq9za-nVkKZ4w5bQC0NGMQqIJa4U4nQ.jpg?r=43b',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQeSki_h-ctI9Iec9MCOIG-Q2D-FAET3iXk8vRE3XfyFO0s_fClB77a12uxKbvJeFpDfmfFnP_7LHiW8NVTDLPudjuxU.jpg?r=8dc',
      type: 'kidsTv',
      Genres: '2019 | 7+ | 1h 27m | Music & Musicals',
      video: 'MixfE6OHMRA',
    },
    {
      arrno: '2',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYiudrCUf4QNv8-KTusewqV_CSD6x_-PC90_m-Je5YEknGyOKDxrqQ6uKjkE-I6Ic197mDq4t9xl-lZMjqdBp9J8DNIaSA0N2RlW.png?r=67e',
      Description:
        'Defeated by the strong yet naive Motu in a race, an evil horseback rider challenges him to a more dangerous mission: finding a lost city of treasure!',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbS7SiTJO1t_jVY-dq_bMINLvMc9GsxO4cb38I0a04XgOLKJiAHRzh3azycoLAxl6L1rrrv2tDWa_GQrDptPIjL6mAbr.jpg?r=1c6',
      Title: 'Motu Patlu in the City of Gold',
      Genres: '2018 | 7+ | 1h 17m | Music & Musicals',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT1x15fYzMrrvproB6HMhRUWvKYGUD4j_vLnaTghJfzog3Ww66vHj6zcDI25mJU4ObcZ-wYCFizN5HqSxGBZlsccTVv8.jpg?r=82d',
      type: 'kidsTv',
      video: 'Pq7-cFgcdL8',
    },

    {
      arrno: '3',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSxfvOABvHv8g0EYLt7xJ3_BMusI6AmamSkBkCY3YdAQMLuxjoSy-td4v2z3NpCxi5gQ4xleZ6YL79A2m5xU-plG_uYL.jpg?r=1c2',
      type: 'kidsTv',
      Description:
        'For Motu, facing off against three children becomes an unexpected challenge when he realizes they have superstrength — and a secret!',
      Genres: '2019 | 7+ | 1h 24m | Indian Movies',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUkS3Edqox84RH9Q2jixSTufdqpgswuKVkbG5_Z6stpAp3r2xaFWuQgP3FwdeA28gu0csvhwHiQLHs-3ffFcfjZbHYV5.jpg?r=afa',
      Title: 'Motu Patlu VS Robo Kids',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSyYcCWjPIet9LdqAG0DMhSimUO51qT_DFVzQCuoeLpRiC4A11EjAL1jCMoxpLm5v7nMeuztaqhKIQSz4a3KILLtXjXMivUca_Nb.png?r=714',
      video: 'NccG63S8Vk4',
    },

    {
      video: 'OvblHC3wSU0',
      arrno: '4',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT34XTrntjpcAPggzXQ69OXsEPG-_GlWmhWAouOrHCOWPp1sHw-9omNQzdMwwrhcvI3y5tL3lTkLGN2kP9oZnWEZWjg.jpg?r=8ae',
      type: 'kidsTv',
      Description:
        'A trip to a magical land of dragons turns action-packed when Motu, Patlu and friends must help protect the kingdom from an evil neighbor.',
      Title: "Motu Patlu in Dragon's World",
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeEOzn7RiVZ_niTK5JMPAYJjShBdMCW_w02mf5TMCf_LwAeW8476yX6esqHcgu5g77BtQy7OsC51Om3vQOPcYApG6YJD.jpg?r=2b1',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTZ30MjHksmAqGO9VnI102erOdl7Gdqow_eOriNo5mkMj_eLEnk6TD1b9p4AwgBGi1M2HCM5Ibg5RFUiodQ4bck3l3GCcUL1gDPf.png?r=232',
      Genres: '2017 | 7+ | 1h 18m | Hindi-Language Movies',
    },
    {
      video: '5S-kFkDnvMg',
      arrno: '5',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaI0I6aMJ8EcxnW-Xpn7QaIVVXlbc1rGuREa6MyulpLNa-b1NHSn1MXvG11WlYccr4r4ACMI13TYMu_ABgIQkcVOe2kN.jpg?r=ef1',
      Description:
        'With a dangerous villain to defeat in Hong Kong, Motu takes his martial arts skills to the next level, training with a boneless master to face the foe.',
      Genres: '2017 | 7+ | 1h 24m | Indian Movies',
      Title: 'Motu Patlu in Hong Kong: Kung Fu Kings 3',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcr8j16b0r8gqhzxOjrOIj_G0IHonf0dqvmg3_sCXUNf5joOZfdEO2UXjptrSo0WkkS8W_ED5-GH3GXXCC_VHGsdT7GrB_w7idR2.png?r=e29',
      type: 'kidsTv',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdyeRY60mE9wtmhrSM5GC41gyrLQq1yZLycbpTc2jUpb3OMbZFP4f1xMy2KVQy9BIpjBtmEwEq9IgGagr3wTw-W-jL4k.jpg?r=0ea',
    },

    {
      video: 'pcq40DVAqlU',
      arrno: '6',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUsJG9kKC66zyng6V9Zm43znYjMiO12zxIWWPJjOw7M9WJdkYOy89CrNyyX80NXowGl3PdBsmWkl-KYIIAe77kLR27U6v-u8RT6a.png?r=864',
      Genres: '2015 | 7+ | 1h 15m | Hindi-Language Movies',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY0HRmLrJqv5foI_pXQfZVvsgHRfgkb3EhXY8ICvMXKnB9m2xyLSNt9nKW8EmgEeHCLQfHNPGUrBHuoNs2MdBA4U4RGa.jpg?r=e6e',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVNmVjxOZpQn7V-oGAK_kqwBmI0h0BF_5tM7P1tWEFOefsFz7BGWf3JQ5vxqb89ccaSsA1GLiQ9uY2LmzHsw2KieVGYA.jpg?r=19f',
      Title: 'Motu Patlu: Khazaane Ki Race',
      type: 'kidsTv',
      Description:
        'To find a treasure that could help their city thrive, Motu and Patlu must thwart a don and his henchman, who want the wealth for themselves!',
    },
    {
      video: '54YkcpdSmgQ',
      arrno: '7',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUkV2lDWN0THdONfTSPMhJ-T9oq2XVaCSVo-0Omjsj7jgxsUNA1VBOwRkduRvBnjtb9UFY_gWK0GNtlspqKKXcGqVrg3.jpg?r=86b',
      Description:
        'Friends Motu and Patlu must save the world from three space thieves, but the job gets much harder when a cosmic collision gives the enemies superpowers!',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABU4YsJMgeXjpcxJs-DDpij28eFMWRuTb7JlYgYF2axSscaqXc5gpplCz-yrkjiprLvJA0KtL-ZFQnoEXdkAOkwUVAKHF9RW0YGMN.png?r=f24',
      Genres: '2019 | 7+ | 1h 19m | Indian Movies',
      type: 'kidsTv',
      Title: 'Motu Patlu the Superheroes – Super Villains from Mars',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc2gXTr1JKR6gv0xBTwlUbyBAvFqV2T7DopBcgw_XNSUWF_lcajS1lig2ccqAixIhMdZsxedx_ipF8Cgr4UiiV6PIShG.jpg?r=e01',
    },

    {
      video: 'aZ8Dv3awnfs',
      arrno: '8',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaDiT8lqosNkR5j2GNdA8V9svLrV_12PvGAOK_zUS4Wc6Hltc5nS0nj-l2iOvQQ5t80NFG1c_PqfQNc9kZBx9a1Ij0ypCOdZZ9oP.png?r=63d',
      Title: 'ALVINNN!!! And the Chipmunks',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRsH1-eQFlg1WwMxT-pWpEVwYj0yvhh3svPKRiRR3MeLSpw-lz6xSDlgf0qX-NHw9SeoAFwASurwar90K9MK9qo4v3rh.jpg?r=90c',
      Description:
        'Raised by their human dad, a scrappy young musical chipmunk and his brothers get into mischief and learn plenty of valuable lessons along the way.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXIHoxWwkb4hmkdZHPTHOWZZlgIHfy3hCc--ccNHZkoE-uCV3FQHGojDJB9Saq2tbiSok2WPNlenRadfJxvKmYeqoIA.jpg?r=917',
      type: 'kidsTv',
      Genres: '2016 | 7+ | 1 Season | TV Cartoons',
    },
    {
      video: '0wzuj8oaufU',
      arrno: '9',
      Genres: '2013 | 7+ | 1h 11m | Hindi-Language Movies',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRbCTNP1VHiNeWS7j4EtP4KrQvU4u9FCdaEe8oztLZoOEwRPt4WLOsLnXuncWgyLJRRbgN8Foi2kU48csByBwM7cGQGE.jpg?r=3a6',
      Description:
        'An otherworldly enemy has been turning the moon’s soil into gold for his own greedy interests! Can friends Motu and Patlu stop him?',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcoGbKe9ASzwXR4ZP3sbCYr90gyOkVGbDt3ntbrbcrBP99fmZiKN1iY7C1rizK7hOd91gpXKK5RRj6D4ccgFQyVJRXuwRMrVnXte.png?r=e01',
      type: 'kidsTv',
      Title: 'Motu Patlu: Mission Moon',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABU6jjjbjTHG1PnQomGnzZHFd498-tvv8WB3a-KUHJl8VzWsmiY4aVf6kcJcPXc5iVE7gnVvEqsvOjSapCBfez5wKMQRy.jpg?r=9d6',
    },

    {
      video: '',
      arrno: '10',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABarxTs_cifoZAlZVunsoS1U5-JWz_1uktmjXLWQn3YfN5OkHSI0U0mp_MXKwmLlsT7Hy4zlIb1FSRVDkAaFsdAHXelms0CWZDtLB0PCxePMCl3W23Y5wgPCObt5Khg.jpg?r=91c',
      Genres: "2020 | 7+ | 2 Seasons | Kids' TV",
      type: 'trending',
      Description:
        'Alien reporters Ixbee, Pixbee and Squee travel to a lovely but odd planet called Earth, where they attempt to make sense of humans and their hobbies.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVnDA-67It6xDIcDXpK9qpifN_RIb2Ij98EiZjeFjsYZXWItPek774WB_AnKHbehIMpaU757Vn4n93dii5CQwRh8SwNO.jpg?r=db3',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXDuHAa9AdYu26RB05v_xQby9FY7GQRxEVEvj84CA9fdiGWIiuQP_XyczX7DU8JZGuDlUcbWILGOUVvGodsiMTkFU2Ey0ezBD0P_JlLWNGznaYgBRRzCzQnCgWu7pxOGi1ISVRstj2DAIl30RrqWnMaQAEGAhVRSsxDvrR9AhCtfQg.png?r=488',
      Title: 'Alien TV',
    },
    {
      arrno: '11',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQAF_pbrPtFDooReSE63k-ud8oZDqlNyxzIcLudEKofZVeYjVcXiskGl-1zGaAkGQ1LPT3EON2ZNMBAI4-xtrsFm1UexH944ZT8-.png?r=1e7',
      Genres: "2021 | All | 1 Season | Kids' TV",
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX_j4UW99o1OZ8VEovKY1TOD6_KU2grcHFUiuPZM0lMl9vTdW-FaPzwv0JEZPSlhjHITPrDTQk6YNCLu3KlgdoLKWBRf.jpg?r=a53',
      Title: 'Booba: Food Puzzle',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeFWHd8RB7EGG7uKr599SK-cxkv5hC2WYmIzYdsREHmHcqz6cfKwx0KawXT-2UwcrqXweDs76wYaWW1O_blKA7GvCEd1.jpg?r=b7f',
      Description:
        'Curious Booba is now a chef! With friends Loola and Spike, he creates tasty treats with delightful designs using fruits, vegetables and other food.',
      type: 'trending',
    },

    {
      arrno: '12',
      Description:
        'BFFs Wesley and Georgie and their silly cat sidekick Pretzel transform into ninjas and enter a magic world, where they solve problems and save the day.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ54PiGpw5R7YiM0TflkZahMew6Lp7TnSx0UfqCsqlFkmKc4ir1Hv4auRrwTBmEDnNnxPFucfqbeX3Wz15632nYKqTfSSBwlVCmEurgenkbu1Tg9M-Vv-29xucmYpA.jpg?r=b10',
      Genres: '2019 | All | 4 Seasons | TV Shows Based on Books',
      Title: 'Hello Ninja',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZlSxQPmGOmJAnTlQQpdRlzmM9ZHTzL9fjXEXBZB60wAAoO_JAmjsDU6njzYZ05Vd9dVfB1AtYTGf-hzT-ZxCTeNVhYZhsh0-gHQCb0Wpc-P73WAVErRl-V7tuvH5RHm14_9CpKa2aax_p4fYvGc-AetkieJz8t-fRQE0Hz7-Zs0dg.png?r=fd4',
      type: 'trending',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeoQsDuCIYumnarJs2b-Etr1hQkvoNc2k_rwMAYNefEwMTHy9NwxKKOI26gwcW1o4gx3G-46SemH-9Ul3dtXEIayJ164.jpg?r=93d',
    },
    {
      arrno: '13',
      Title: 'Spy Kids: Mission Critical',
      Genres: '2018 | 7+ | 2 Seasons | TV Cartoons',
      Description:
        'In this animated spinoff series, Juni and Carmen Cortez must battle the evil organization S.W.A.M.P. -- without the help of their super-spy parents.',
      type: 'trending',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABamItn-pK4mtOnfl6DtEAVHn2pr-YVyf-MkdTZBz5RpItSBoiWlkAr6csslHGDOfq0tXd3euefU9emresHENHOYNv5KrRkPXm2U3zzncP7nA3UbvtDG1yPFOp6y1.jpg?r=8f6',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZtqjP_DGzD6i_oRDkqGaykXacYfGaUsd-HVaQqqWNIy2OKOqYJYjf9AafaovnfyYmEMSjzPGYpbOHU_W0CWqV6g_8Tj.jpg?r=ed0',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABZFnZF3-KEf3-EMf-1kWU8eTcMP3hB75gZ6IQXvWLiuPAZIDJfAYzgY17tUnPExAFk5W5krv0VXRIph95Jj8fZgKeAqocIlGU37WDkTsQvTGGffQIetmBwz84m8YACOjo0c76Ea-1YScM48BE_4t2bZTdHjpunrcLq0VIXNDHxaj0Q.png?r=5cf',
    },
    {
      arrno: '14',
      Title: 'Reboot: The Guardian Code',
      Genres: '2018 | 7+ | 2 Seasons | TV Cartoons',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUc9yZs_1YeROTwnXjp5_wSJXLZV60Zi0Gh81wC2BGX-6OYMLPQhIw0lZ5FQqnpxf1WBEE50vcCAKmzAl_GF3fMdGP2K.jpg?r=2f8',
      Description:
        'Four tech-savvy teens hone their skills as cyber-superheroes in a series of secret missions to save the world.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSFSNXXHk4Ofwmygt99MuVAsXd5GT4zQlcqP_Ku0vZ6fgTq5carOr2oFqJhUdzs5J42Q_HuPSofWym5YuZH_lf4cy1Fbv32hzFSQXMpNSG5jqav98yWoxQ1utppbMw.jpg?r=753',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf4639vKjT2JACqmVNkoIDf3CWX3LS8eqNavK4GaOATFe-ac99I53Rh88Kn0Xi7u39X1fn1FKOfzmH_8_ttjLIpSbi-XziCreqb80gcuUPivvnSXkPzqfJm7RTGKKNvJPpSMunui72vVw3Y4KuSAxKbpGIcdX3efeQIp8zxOWHdW8g.png?r=c8e',
      type: 'trending',
    },

    {
      arrno: '15',
      Genres: '2017 | 7+ | 1h 27m | US Movies',
      Title: 'The Emoji Movie',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWz0vUSRD9HjQHspv60UnWDEjuJuGyzh9nTsRdEnwf1IuuZDa95rwovindi0nwx9uIAy9I69nEJNhpPa_OFfffH3YhrJcq1oNOgT.png?r=b0f',
      Description:
        "In Textopolis, where the emojis are expected to display just one emotion, Gene's multiple expressions are a problem. His solution: become normal.",
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXeb_S7QznuQQdvkxyjGHOG6cMZWRYwd7t6Ox21dusrNwBv5zmb4s55Uk8nBmLqhCY9bQjB48mS_14x1FWoswYgqUFNB.jpg?r=d9b',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSph3zVf8jfO0mmNOL1DtbuQqIKtWMU6hfmZH-1htOohiSIYNk5MWIRXbVX2O48cmZevezRuqZsDNyYvhwUFl0HZdRc.jpg?r=0c0',
      type: 'trending',
    },
    {
      arrno: '16',
      Genres: "2019 | 7+ | 1 Season | Kids' TV",
      Description:
        'A new breed of secret agents must stop a ruthless computer virus and its minions from stealing the unlimited clean energy source that created them.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXkJ8BKOFPh_0xsLV3XSOWAnsDJlQyTr6t9rAd1AQwiOyWcT2fftJgZHDW17dWY3M9J3FZmf0GCLrvPjUNnWLK1iaCjO.jpg?r=ed8',
      Title: 'Power Rangers Beast Morphers',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABROa6v-aX8Ly3eY9Q87p3CoeHV0X9ZhKwjO_nrmgvHaYvL0SoMM__6iD80nNRlN8d7LCjJITTrha05pK9TICK75gmv5klmtIb3nc.png?r=82e',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcDtvZMfimL78uYraNuo1J9bLTdNYmLuaGLkW-vV2oa9-gLycz7cDeDS9dRWL9MFksnawcqNEAWbW6XJ78LLPzPrQeeU.jpg?r=5f0',
      type: 'trending',
    },
    {
      arrno: '17',
      Genres: "2018 | 7+ | 1 Season | Kids' TV",
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABW0cIEy_z90yFyqBXYyvHLe_ZoGydsBMfxaN11pTACjDuwEl1HSLzp7ccnsxEVeCcVH9bcU1i5eo2ZIVekqEOPdidKWm2GyrXErw.png?r=5cb',
      Title: 'Kicko & Super Speedo',
      type: 'trending',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaB7RBVPkw7PpIr4pdX3-us_yDIKIgv8taWVDKQFY2iAfFD7i5814ulgZZrlqI9xW5Iq0npcEOzDQvJYHlk5JGB8CNBD.jpg?r=4a7',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVUSUmzrZGUdYY18smTPhL6pPK9Z63U0jl5FWMY3wM0f3OqexS_VlkmlPIiinqkr7KQDjtqj6mMKEGW1TaellXO1HA0.jpg?r=b07',
      Description:
        'This high-energy animated series follows a gutsy kid and his trusty race-car pal as they save their city from bad guys and their scary vehicles.',
    },
    {
      arrno: '18',
      Genres: "2015 | All | 2 Seasons | Kids' TV",
      Description:
        'Furry little bunnies hop through wild adventures as they find solutions, fun and sometimes mischief wherever there is light.',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUNwj8K-XB6J-3wnF-m1DYaVTjXwwlpv8f8669qAQljX4GVHvTiRFDjJDpJ82m4hhdvyJ8MGXMy_wUr2hX7g40Sr0MbVt1X8vyth.png?r=033',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeHlt9hLg81FYWA5ctay7X--ugXpjnSW8bd5adh31nzYIRfgV_UnoYtz-yqc9AVoEpJIIsR00a0kxSg8Ifr3Qx8fCkw.jpg?r=7bc',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYy5IfE93fLzoDoK0qTgIssLzaN04yLkFMvto4wev6-kBCUY525SdwLce8sZlfk4rK_4wVQozdnlEycLNoLnGgqpt072.jpg?r=a8b',
      type: 'trending',
      Title: 'Sunny Bunnies',
    },
    {
      arrno: '19',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbBXqVRD6V1XmiciDym6iFnXWRJalUcJiI1dmpXsBY6Z7Z4qIMKKjup4TfDCs1IedPLYFT18zzbsqOSZS80DnSdj6pvi.jpg?r=606',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeYIasEc5ZGv5oS6Ib89_AUAZ33xGQ65Jrxk3I4bOQ1N-uAMvNndjhGjpnMNuSHAofmNCh_2a1e9fs7IJqo47mC1ykaeKtxGswOq.png?r=53f',
      Title: 'Pac-Man and the Ghostly Adventures',
      type: 'trending',
      Genres: "2013 | 7+ | 2 Seasons | Kids' TV",
      Description:
        'Teenage Pac and his loyal crew face the ups and downs of adolescence while protecting Pac-World from a ghostly army led by the evil Betrayus.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXFofTNrVDEPzyIBEKzNkPforZRXdLR7srkPk8mDltAkIcfA3hdhFV-u9ZJtboVCZxFUL1RcQtY7HDQi7Uo5pZ7tEG3b.jpg?r=edd',
    },
    {
      arrno: '20',
      Title: 'Tayo the Little Bus',
      Genres: '2010 | All | 2 Seasons | Education for Kids',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZGrXXzAqSKSeQkBgg8sYNvFEU7bddETgVp-PQBGv5SDLyGCc1o8EJB-T0sRWgofqGekJnkR-tIpNrdaTf_ch68gpLjZ.jpg?r=67b',
      type: 'trending',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABa6sezlnom2rxhFxB_GAE1A8bBJDlvv3fLpISkOWQpjojk5bGQxIOvwW1FrEgfYeVMIiKktgmsliZK-_gP23Sj9a4Vwot7Exl4x7.png?r=103',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa37gY-j2UpSImYTtV5UDcMySozOyV3icCBpl5wLKgI-nOhcb3VBesMXwX5YtQieOQ5YAj9vyiZTv_7nW4M3i_H5rFA.jpg?r=1e3',
      Description:
        'As they learn their routes around the busy city, Tayo and his little bus friends discover new sights and go on exciting adventures every day.',
    },
    {
      arrno: '21',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaoSv8Jsuo0jl56g7I4wPUZRu89XcCeW0D1-6IUxwyLkxlPn1DACniDkK42C6WMhNaGBnSZI_osE2ias97wbcrnz136N.jpg?r=988',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABch4n2xpAGhhH8mB5_Mg6opV8SNp0FDq1CsNTIPUugSb6-Tm-QYTWsQs1WwsHPFOuTa8DE_G5LniJyA7p5Pc4UQPs6Vv.jpg?r=ba5',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdnM0fdMDHrOqypSn6TZ4LUSpMsKKVi7mGBQ4ypJDJVn5s-1XP9cPQ11ZwbBCfgFL_0CUgO5TBZTSODsEOd2rajTNUCYJR8eTRl3.png?r=d04',
      Genres: "2015 | 7+ | 4 Seasons | Kids' TV",
      Title: 'Inspector Gadget',
      Description:
        'Inspector Gadget is back and must face his old enemy, the evil Dr. Claw, who has reactivated MAD, his global crime syndicate.',
      type: 'trending',
    },
    {
      arrno: '22',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTqYU4P3yq5fw8Tk0fyXXa_rYUV8eXGYzcKxofhKZSQeRXeAoL7brPgJT_cLzzHy8WxyHGS-QWq2qXXCl4D2sXwcgAv1.jpg?r=b2c',
      Description:
        'A little girl discovers she’s the modern-day descendant of Snow White when seven dwarfs arrive at her suburban home to serve as her guardian angels.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVdCpS8cIIS_vmYIw50vdODeiVAlIacNteyqEOXcKbdyYNGZMh8480j7kQheEdVIXNMVCScWXZpyXBylRE6P7QGb1Lg.jpg?r=324',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQGhmTOuvVNPT1uivYxhnPlm2JkkBEYFH3MNmwAAwKNH2BeTnGQTdlbuD06jIrjYcG4V9J-RJmgODYiCNMtiEOp8vqOI-6RGlaBb.png?r=4ff',
      Title: 'Seven and Me',
      Genres: "2016 | All | 1 Season | Kids' TV",
      type: 'trending',
    },
    {
      arrno: '23',
      Description:
        'A boy and his homemade robot enter the toughest competition in the universe while attempting to free their oppressed home from an evil empire.',
      Genres: '2018 | 7+ | 2 Seasons | TV Cartoons',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABSwGjG2GjZUEiBhUBnQhgmYitEjaXFaWPVgVm_Z3aVaUqhmJZ5rYC8grXdWGuui1R7OP-ijc_cUVVC067LpJNQxHULqACY0N2-VeOKsLqV5gpFqkHobzPj2xb7tDqQ0cptXdeDrsA88FFerUCkolN4sWeJoamgjxCyqildBAyJYp4w.png?r=f3d',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEsSjfV8WpqUj3DZoQ5KmkCiDgSl1ZGcQqfTCn96BZDKEwZsHaU0hU-LD9Mo6L_CTlqi5-QH4GcQPpRK91h78Q8_jGfAHDTixbUr7XaDoShTCEyLdXg_sOdMW-INg.jpg?r=8f0',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQBF-MD7W66xDh2fpiQYRoog_AMrSpjaXJezZBD8eESw-vWoQqUlJKQIMQk76CxQSC6HPQJzILRVPSlfs_Vyy1Z_znkU.jpg?r=e2b',
      type: 'trending',
      Title: 'Robozuna',
    },
    {
      arrno: '24',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfwX-y6ozN1uEF_EOtK_hGstV3zXG-jdb9SESw6gDAx1-DAHvY3JAO2oCxu-YkLvHkK9cyK73NmV_AkUQROM0aJyaARR.jpg?r=c7e',
      type: 'trending',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcVBQGkbOgyjv1zhBx3ABV7-a4w7GZDcAGkhQUCBeTCwU_FXc6Krb52bSKuS6Ya1Js-scq03aMy2MCIa8b0UlFkndaTLRz9NMP8Iia9crMpseWatM8Lu_X9TtJYjElKATlCGzXXAL57oAmn7qFPLZ-ZBRzVni9_DeW-z2Py62Fg6VA.png?r=19d',
      Genres: '2020 | All | 4 Seasons | Education for Kids',
      Description:
        'Armed with tools and engineering smarts, monkey mechanic Chico Bon Bon and his Fix-It Force help the people of Blunderburg solve all of their problems.',
      Title: 'Chico Bon Bon: Monkey with a Tool Belt',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRLQZJAWkdYJv8NbI6HtZzchxt0lCTNeK2RmVkGjjF29cvakWbceVyNyqLwup8xV4ar_xjc3443KXpFVyXeIiTSbKc0KneDOfZ6edoMCntBkyg9FZnXZKfIJZTIpdQ.jpg?r=4be',
    },
    {
      arrno: '25',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYPg4K9u1UDG2R7r0sWjlYtZQjoah_93p0NeS01nMoYXAO-TPYvRQGIAaBgwqKhHV3IJogwfU1qQBxRo0BYkZbb-JAI.jpg?r=ce6',
      Description:
        'Half dinosaur, half construction truck, full-on fun! Watch giant Ty Rux, his little buddy Revvit and the crew come face-to-face with evil D-Structs.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSH1Uiuted6vaEbnwI9Fh_5o80HBQMgewU4VFKvDqA_XPBVhKA4BBRkp5JK44-Hf1zq4lslPR9tllLlRdEDYFqD3EKt5.jpg?r=157',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc-xfzNddYwJoCwL6q_DtfdfcCd4sE663LzxZaaUEs6Z1waP7ABFLncNU8kY55MzMT_corkMU9etUJLQ7S6GNfQ-UoxzZWIQQ5bU.png?r=f34',
      Genres: '2015 | 7+ | 5 Seasons | TV Shows Based on Books',
      Title: 'Dinotrux',
      type: 'trending',
    },

    {
      arrno: '26',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXfxVs-gZc9eDkcld2OyE8CQlHTn74Fu5cnqqe059zYSo7lufzYUxZ2ziWJbswrg5zbiaL4dvQZD-keejt_zE0inS7g.jpg?r=476',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABd0fUt5NiXDF-mmgVFj14_hTdhxXH-vKs9AR0JvexK4Vysu0ua9QmtSEuKWJB7nA8xcIioEyoIG3d351QSnBq43kRkwl2KCTTIgw.png?r=17a',
      type: 'newTo',
      Genres: '2014 | 7+ | 1 Season | TV Comedies',
      Title: 'Sonic Boom',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX10HcEBVn7nfMJuIRVpBF0sk9ICqa8oKANM_gxWZwFJP396Nebrpeuwfr0pLW1ISzcUteCfBM4g2hjEzNJ-G_4Rx5cE.jpg?r=ca0',
      Description:
        'Sonic, the fastest and bluest hedgehog in the world, teams up with his animal pals to stop Dr. Eggman from turning their island into a theme park.',
    },

    {
      arrno: '27',
      Description:
        'Villainous Gru hatches a plan to steal the moon from the sky. But he has a tough time staying on task after three orphans land in his care.',
      Title: 'Despicable Me',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTLj3K9cSkE8YOwwORRVeMLHVUKSZ4MS0YRfbgHbUW5TAwMohuQmC5DPwqzBMJYc4cXO_L9o6M8GCPBd6qEYdF66HeFi.jpg?r=795',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYz8zp1_kLBCcczJJvByN4YApN0uXjidF88UXEJdCPHyC0ahmm2Nv9TTY8Ne4xkzBf56w4ZSNLAoxVajjPY8pAxcAlo.jpg?r=164',
      Genres: '2010 | 7+ | 1h 34m | US Movies',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABf2OdXqeG7t55qTyadkN7SiQsAa7FiqNwHWsLDO4Z2EWw6p0kCDNDAa-8eWFi9O_Eh2tVMFg26_lZHDHH_6E1H5VGFWS8g9N82Ed.png?r=a4b',
      type: 'newTo',
    },

    {
      arrno: '28',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSJQoceA5plqc8XndAiN_9W8fJ9zMwFEjsWCjXhWuR3K2gDRZI4oYE4V9tiwojV0j7_np13I4z_At1eIjmcr3idy_5tq.jpg?r=468',
      Title: 'Hotel Transylvania 2',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZdMWW9LWaoACuXZpHIFdnKFdDX-BLXhLX9r-IuyZYxTPSqG_yJGKVGVj9l7uKAl-vF6NIw9hiAH0WS19Qy_7viCUjs.jpg?r=51b',
      Genres: '2015 | 7+ | 1h 29m | US Movies',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQU1sbvm8nRvY9IJXnulb5JWPUpETJIblnCww4rjbTnQt6DU-NRF8xnfJT99vZRCGiNqJS-tQ2-R2xTFeQ6EhGSTDEattT-aeX97.png?r=93a',
      Description:
        'After Mavis weds Jonathan and baby Dennis arrives, Dracula looks for proof that his grandson is a vampire and needs to remain in Transylvania.',
      type: 'newTo',
    },
    {
      arrno: '29',
      Title: 'Kung Fu Panda',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQbVMshSQJtHrYFQHvg-xG_m3T_0kCSaNJ5hReaprvWzLvuHmBIB11iVaoav_2tll4bn-B0G-xp8cxrLzoMRuqcwo2MSuqVKpeRv.png?r=e44',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdORtIGrzLY9FRirW_HPrmbSPmMT6lKYGzYUikmMI9yOn3_5VOU6JwsjiM31k8Gz-iu0n04RZFBH3KJ_cYQNbclQnjo.jpg?r=5ab',
      type: 'newTo',
      Genres: '2008 | 7+ | 1h 34m | US Movies',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVXp_cqM7eKZyyUTAtibqU9YhwlE2eL56ETnTe3Yk5PSXIiHSbgtJ7-A-FWpw0P5r0g9nJrmYY3xDur8cusLs3u4qbtI.jpg?r=34d',
      Description:
        'When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the chosen one and trains to become a kung fu hero.',
    },
    {
      arrno: '30',
      Genres: '2015 | All | 1h 35m | US Movies',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf3SfZntanHrRt9A_hZyHRjvpqOQfM7T_bX3ppPu9dy2OpUWy9eSkHK64N92oj7nousd2y1F1Tz2cDETP8EPdiTbwtIR.jpg?r=84d',
      Title: 'The SpongeBob Movie: Sponge Out of Water',
      type: 'newTo',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZkJbs3ZqZsg0PrW4wd4VqEDOJljJdlSqeFthGwNQ49mX2UqkUwQBwquT3In6z7DtSCT1z8TRwYY_uKprg5a_rcx8v947ocQj2RyjkQ_dhwCqwDaS1O9wWYmqOiv.jpg?r=1c4',
      Description:
        "Bikini Bottom is in a panic when a pirate steals the Krabby Patty's secret recipe. SpongeBob and his pals embark on a mission to bring it back.",
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXXRLtcLk3fzib5I9ismcrdr50FUiqW3sF32ViGwOB_ShvD2a7IiFCYVqJEbiL_OSLVZuTBYffzTFrSddDswmjBNl2KDpaKWldoY.png?r=753',
    },
    {
      arrno: '31',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRy5RdbPzX2e2lq9c2nqFOGxVnbwj7Z57dULCAK4SBhNY6urwBzHdUe1VvObjhmbTmlGZUpepLkvT8GQyOMXD9L4V36o.jpg?r=8ba',
      type: 'newTo',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYswwhapciJizeMlQYax8hmCMPaOrgsx0nXFpETx5SKRXVicuBdII5MRkrn_WM6m98m3wQJw6s8r92pQ3ie11nsBOdpqR_kEZSXo.png?r=5bc',
      Description:
        'Toyland’s boy detective, Noddy, solves mysteries and finds missing objects with help from his friends: a panda, a superhero, a dinosaur and a robot.',
      Genres: '2016 | All | 2 Seasons | TV Shows Based on Books',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYDF5nH4xfcWsXVr9sBacIkXPhUFDapCPZ11PNcAfnJk1-_f4rZ416djushJe5H9-UugKQ1Aa3kHZXZ99FyZ3gb1phY.jpg?r=858',
      Title: 'Noddy Toyland Detective',
    },
    {
      arrno: '32',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY9VwvkRaq-NeG9azDI0cv7WHHwfYgL16xdvpRR2CxCrokh1YJfDuYXmezIxd_WycvZlvKt53_p-ADNf4Q9XZMtu6T0.jpg?r=03e',
      Genres: '2015 | All | 2 Seasons | TV Shows Based on Books',
      Description:
        'Three 6-year-old kids who live normal lives during the day become superheroes at night, fighting crime as a team known as PJ Masks.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS0TLI4W4700F49l-uv32L-KUDI0rC2WaX3Nk_og5Cl2MHzNysnJrxmgADaAOp4ayOqtlB_wCXsLb1FqpKSVEXrRbFRS.jpg?r=507',
      Title: 'PJ Masks',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdz6AzwRlitSnzhx0sDa_DsKD7keczLvEDk1YSUiI3VD9SyRgb3AjgQVCyRVdRXQ55hUiI75SGaC8pEN5nPDsqMcA2XW9P12rNAR.png?r=1a4',
      type: 'newTo',
    },
    {
      arrno: '33',
      Description:
        'A robot apocalypse put the brakes on their cross-country road trip. Now it’s up to the Mitchells — the world’s weirdest family — to save the human race.',
      Title: 'The Mitchells vs. The Machines',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcqetzA94dJip4rSm7yQnq4edI4TQ6VGzDXJo0zAfAO7roAzQNzTw1Mwp4tMann7W5cLZeiQXk1tLgVfBbn2Y2k8aj8Nmfg-anCs-l8HkLn2urx53RyoeSB4OBiQsYzx1EsyFxT_yDSo3Vp3axYIVIfj-LoYIefccJ63dX_N7x1CFg.png?r=afc',
      Genres: '2021 | 13+ | 1h 54m | US Movies',
      type: 'newTo',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQbeBuUJglU840dxIk94E_9c-DJtZ-rgWzecG6sL5Hd463qoE5yEXqSq-mcY6UK9hXNskmrkNL062hq6KjN0H7YBwGFh8VCSRe0dPyG9WAPxzDnaFjKiGW1vJ5sd.jpg?r=c5e',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb7HKJ0_IXwnC70tcsPTsqgiTjyUacgYwrnaPYXAym-oPQay9ImhrMl85iJASOWXkTIxOe_qw2vOLku3buXcaDmho6ul.jpg?r=57a',
    },
    {
      arrno: '34',
      Title: 'Secret Magic Control Agency',
      Description:
        'Hansel and Gretel of fairy tale fame — now acting as secret agents — must use magic, clever thinking and teamwork on a mission to find a missing king.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABY5o93PbrUzA8jYNHi2sSXoyA39ys3n1KdRpi0USULg9vYf0NMFUFy5_RwO_F5tuEVhr44xqMXeaZCZGtuUGPEyErx-D.jpg?r=bde',
      Genres: '2021 | 7+ | 1h 45m | Movies Based on Books',
      type: 'newTo',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABX8AdilnoMvYOfJJoxMwzzDqzmKSyX2ow6z7RV58XwWfBpf9ealyst6FMIKrG8ylkCaCAHEsC_7K0_yjuohhACQ_2n5UGZrFboyMjz6WmvtyOHmtMFC-wiZQl_t1mxlHZTxKK4Y_RGkwznM5UFqcsnnO4CI5hxYRZWXf6XvqeexSYA.png?r=857',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVF1vl9eYNMtD0eZXqNXSn3hFwKvV5GuCUKzaLxy4inoPq-0ivP8pBKYKdpunNt55cCrAx6jLLnqKAweCQV8uVXFn64YELBPblCK8jE8TGggLhGl8a1V0ya_4PPt.jpg?r=ec1',
    },
    {
      arrno: '35',
      Title: 'Grizzy and the Lemmings',
      type: 'newTo',
      Description:
        'Strong, whip-smart Grizzy rules a Canadian forest, where he has his paws full with a family of frolicsome lemmings.',
      Genres: '2017 | All | 2 Seasons | TV Comedies',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW0Y27KgrZg7OeH78m05nsjz9b7Rs4a-hT8FgBAtEQ6SXPc2_H6blFNU8w3mq-f6uLYsErk4ooSpRt9f2WiSqoisgv4R.jpg?r=c87',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABX0Vi2Ojob6QUzQ4v63rULYrQU9Jxidiplm_mvUymgqq-9U7jGX4bwLJlii9Ax6MI3ubmagzT5abk4oyrZsV1A-exB5lIOZ3u220.png?r=2e9',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUgNw4I-SUhN3jlEr2l7jaRMvuhYyVAFusGMHchdVJCZoYLsLwU4vwWQvSxR7D1Blbc2nz2twHGoc6E8esWXSauVPsE.jpg?r=93f',
    },

    {
      arrno: '36',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVhxjpyk31IJSWbfYNQo86KIJOUyUcfeKqMZcERZVzFeCU1tZzgOpHE8d5KMcYsG7nFlOIAX-UPjXu_x2oOpgSmyIPpQ.jpg?r=176',
      Title: 'Madagascar: Escape 2 Africa',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbsdulQKO89nn2yGnUlKWnkjKALUOtBWqpLfECdNJHPcXJOFyVCSNGR12n_ZNdJv8tbJ7N6Ytq9tLs_wvGLZYgA8s7-e_-Eo2UMg.png?r=ca7',
      type: 'original',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABREtmp5ikQ5lOIq1XrEtA_8e-6hwep-jljHSTwKb248geEi0pacAAaEURc944HBwIq5Na6OIW5Ra3kNsKR3OoJUGfDpZ.jpg?r=148',
      Genres: '2008 | 7+ | 1h 31m | US Movies',
      Description:
        'A botched rescue strands Alex the lion and his companions in Africa. Sadly, Alex discovers he has little in common with the locals.',
    },
    {
      arrno: '37',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUJd0vgg6ZV2SK9VZwK8XU1J0SkwIs7uuVltEtzYlDkWNJcliqZADSuq8uumbX3k8IcDtoWLrXXa7Z-qnEzGW_OI9wTg.jpg?r=031',
      Description:
        'Birds Red, Chuck and their feathered friends have lots of adventures while guarding eggs in their nest that pesky pigs keep trying to steal.',
      Genres: "2013 | All | 3 Seasons | Kids' TV",
      type: 'original',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUn5z9GbcTWP_JhLRRUMPyXtaLLeZpktkSG7ztm202gTeNjwJOh4qc35IWKSWKUiU2rbF1ZC7Jz3preVNtu3UjVTwWU.jpg?r=50a',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaaHuTicdj0Fs1i6AZ4QdxBmpbkHh6B7-p6MHyiQq5BBf-D32iMvtZunmmkQH-xMALkBOx5rF8SresHUpvsxUXUxBH0N9SqSxvXL.png?r=c0f',
      Title: 'Angry Birds',
      video: '',
    },
    {
      arrno: '38',
      type: 'original',
      Description:
        "A jobless slacker finds himself beyond busy after he runs over the Easter Bunny and has to take over the rabbit's duties so the holiday can continue.",
      Genres: '2011 | All | 1h 35m | US Movies',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUi36xCLbIFVOaIjC7sgERF6Jvw2BfDzh_etBt_g30ID4OfbsqIxaPDsGd8eUW2YVvBOCuLB_HJ5rd2o3sqJTWWh4co.jpg?r=9ab',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdRazjz53dbV0s_YwevKab_211FNPgGfXUsod0h-YhU4u4dbYOovjQkuXYrQenxwGoVn03AEp24aK2AqREfQtUO-qXBC3CisherY.png?r=608',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaIeGIi1BB4_qtXqN6s59aRpnlVpBaJAlCUBJERn8RSj5KqQ4zX3MLt3aJ-iBUJ4-oXdILGy7YIG66lFxcTD-pdSEcQF.jpg?r=9e3',
      Title: 'Hop',
    },
    {
      arrno: '39',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaDO5tDKFk2yOKnu-nYs6Cjz4xD-YeD4Wwjboig9HGZm_kDDwh2qF64h6Pw_uFFGTej2_zfzQHZZIY_ZN9mF98NIeSd7.jpg?r=26a',
      Genres: '2010 | 7+ | 1h 34m | Movies Based on Books',
      Title: 'Shrek Forever After',
      Description:
        'The fourth chapter of this fairy-tale series finds Shrek feeling less like a monster and more like a man in the midst of a midlife crisis.',
      type: 'original',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYWUh-nAEDUW6u2lEJiwRssG6Cud--kgR97yymKnt_yU1_FnuPd4VRtKKm_kV97sYEGSGsRG1T9i3xQjzGKLYjTTElc.jpg?r=a17',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYhFMb_DYL_lHFL4NmqL8o0la-K44zBBzFg9NoPYpyITsY_R-Ks8iO3ZRr-WSh-0-SWGQxqiSuK-u0JSezZE9fD8PcGEwRt16N7Y.png?r=d31',
    },
    {
      arrno: '40',
      Description:
        'The forest-dwelling Lorax has to stop the short-sighted Once-ler from ruining the environment for profit in this adaptation of the Dr. Seuss classic.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeaLZWC8vYY7-GvvlxGdNRKP0HnnEHM0KfVwbNABV79tLPmZFMwnIRnw9P8fCis2h26tSytVllig4q2E2x4ArYipvGZL.jpg?r=abd',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTE4PkMSgKqAHMfYIlkc9NncQXKGPMDh5oDgSBL7gJwNs2OtvTwr3nhK_PhbVKLCnXnkgM7rKkSNypvJc7H2qP-19lY.jpg?r=b38',
      Genres: '2012 | 7+ | 1h 26m | Movies Based on Books',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdh0MZeYegF4oigpskRyOBRFnnptdy-6fDTMTrM3IJwHmxrngFczxlv4Z6toLpJOCRNnuBXud3D4G6TBpWPI6M9tKCDY5lAFPkJy.png?r=e32',
      type: 'original',
      Title: "Dr. Seuss' The Lorax",
    },
    {
      arrno: '41',
      Description:
        'When disaster strikes in Brooms Town, police car Robocar Poli, fire truck Robotruck Roy and their friends on the rescue team race to save the day.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdg_k6hY23EcajFx3UP1VfGqu39rcJzO_-LqvRIhTrgN_9v64rpOENppvsltLvUNovdJlYBsu9Mm7Gn0ScDRK726AaEA.jpg?r=c9b',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABR_AnhQ88w1EIS2rv_3B6z62-0bOz-7HB17C5pc9Xsah87oQPkM9VhZR-pf2KderlWm_-TZGKJySgDFX1Y-tBRu2tJXWwnv2A12F.png?r=130',
      Genres: "2011 | All | 2 Seasons | Kids' TV",
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdpIfyp7RZAEZnOsQaH4vygYWYlJFPFCWHeXxqBw0MujVCVACg7J6VioyJ9TQMobYPKhe4lM5UqeyDTSPpqfcMXsKiM.jpg?r=623',
      type: 'original',
      Title: 'Robocar Poli',
    },
    {
      arrno: '42',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeA7phJqJ5CBdhCMbzSkgB-xpY9HTe2GlglpiDXZpntatXKFY8QBVjyGDS9mV1HN6lcpqkN-qs30fgI8b9sFmzwXTjoi.jpg?r=ae2',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABesOiRgB76hYF-CEJh2SneClodz9PVnQNBmZSGxGT4ijnQ5guBPIzhtUxKfMePRkqUH7bsg3Xbyh0j4arXg2_prBgnbO3uCPcxOGkZrKa7Rwca2U_p7ndZSXCxuS.jpg?r=158',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABT8Pq_be6hISktXqBeFda3pWJVdPxKFRwcnTZ_3zZWxbpwgfGvDwJhboUCzuZRvNjxnsfjkGuyjZzbmvroIfbv9KVRQIUPcQztt_Am1uJ3DSvUtHcvXLAj7bDU9RK3Xm-EO3-ZwWseGEmTyIT8kHTBnZiKL-9boIasFKs9wpWS8_OA.png?r=6a2',
      Genres: '2020 | 7+ | 1h 32m | Movies Based on Books',
      type: 'original',
      Title: 'The Willoughbys',
      Description:
        'Four siblings with horribly selfish parents hatch a plan to get rid of them for good and form a perfectly imperfect family of their own.',
    },
    {
      arrno: '43',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSKkB6sEFccYT8L_vk8KDXmOjTTDJBdgJmv7NHG0sTDyEN6pkj2mqRQuZJ41yJYQqZtuchtgylFg-xk2mPaAhNpZPgM.jpg?r=e32',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQALjj06SjSViWSeFBz7q2tkFSb1gT2roImqYhk6u4ZJr_FcDJgc-EThT3SK6aQERYnWMAlldDNCsg83gNuvpdmsoGor.jpg?r=859',
      Title: 'Bee Movie',
      Description:
        "Barry, a worker bee stuck in a dead-end job making honey, sues humans when he learns they've been stealing bees' nectar all along.",
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSq1Pc3cOkgS9IMBFkFICmyPQuC81jgEWrX7ZFdAz8K6RvAA-Vi20TwgLfcJisl0A_htSqTqUc8Zew9YQz8ukFXPwvX2tD3NmUwH.png?r=c14',
      Genres: '2007 | 7+ | 1h 32m | US Movies',
      type: 'original',
    },
    {
      arrno: '44',
      Genres: '2014 | 7+ | 1h 32m | US Movies',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS6dD4NjXzOssyDuJhq-g875E7vkTuSqYEhSkZOWX6Y7VICdSfPPP1HXR-043F_rLxV2Vl2sZeSQEwNjimfxDUjEpFw.jpg?r=e60',
      Description:
        'Resurrected from the 1960s animated series Rocky and Bullwinkle, canine genius Mr. Peabody and young Sherman take a dizzying ride through time.',
      Title: 'Mr. Peabody & Sherman',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT5s2s88ziG60bqCZRThBjXPAL2GdDgAv26eB5l-banDSVnyXn6u77mHQD2NNPl53Mdae_tsO1yow8oWolT5ZUYai0IF.jpg?r=d81',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRkyxrtY5LRPEPG-46E4mTyxgkK2FRzW3txZhGcb-lpYE-70KVqEyG94AcToSrQo2HN37KFtbw-U3StBwXUXLOsi_akPAA6rwbh4.png?r=b4b',
      type: 'original',
    },
    {
      arrno: '45',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcZ0SPGm9n5mB8zH0BqhFotWz7LGPjstBCzV7gufC4QG13lFwv4TUp41BFcQKevf4Sr192QBdry2-r4niL1XiidtHGlOq5H22i73.png?r=267',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX2a3MGlMnVQA62xBGAvhvmPd-KusBvTYaxe5BsvZZsy-W8ayifOGO6dwz2Eui6NKxkt_GiXYT-kmxoQAoVGiygDr90.jpg?r=e90',
      Genres: '2019 | 7+ | 1h 27m | US Movies',
      type: 'original',
      Title: 'Wonder Park',
      Description:
        'When her dream amusement park is in jeopardy, a young girl with a wild imagination sets off to save the fantasy wonderland with her furry friends.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUBcjQ8UMp3FTa3UZuND_wijkuc1tfx-fCY9qBZmRtXK8W1r0w-kPtrYY85zkTw5z7ye2-eq6fUwXMypL5eEb1L8YIES.jpg?r=359',
    },
    {
      arrno: '46',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQr1kgC7F0zCXxbrUqq96tCu6MXiMDwddF5kmyxzO4VecfDf76AoIqL9EbO9uMVDbjVgagX2wVgzYPMM6FTIYFJIVTU.jpg?r=018',
      Description:
        'The adventures of Master Builder Emmet continue! When Lego Duplo aliens kidnap Lucy and Batman, he must head out into space to save the day.',
      Title: 'The LEGO Movie 2: The Second Part',
      type: 'original',
      Genres: '2019 | 7+ | 1h 47m | US Movies',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABULERER_SpN4aHU8RiDI2msvkcAZ0b9gO3HuL_CK5IUogPCezZLZFGIXf_X266VUi0-uq_hept845Sof_GSxwMMf71JP.jpg?r=120',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUOau78xVvWb7gagB7UlKDbxSqJ7x9cq5M8si8BAvitKMKNUCa_XdvBMg8N-Lwf-r-DpP4Y8YjchuQax1vPRbz-04R-tyLcG4X4d.png?r=6dd',
    },
    {
      arrno: '47',
      type: 'original',
      Genres: '2018 | 7+ | 4 Seasons | TV Cartoons',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaYMoVnWM4JlNbrv4XdU9yfb0urhwZI-WeeM_4wcNh_fDK8Df3vhQ5ghCUEHP6_ZfALzERICgTneqN3BijghoOB7Qps9kIOAK4H3.png?r=b73',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRlIb5YRGSz7fShMi3zSvk1vour_3eU_GQct9YV9Lbjw1xxQYPphiVxzvuo4NwNoBgm-xSsAl43aXV4Pl3KTgRAhRCTR.jpg?r=53e',
      Description:
        'As Queen Poppy celebrates a time of peace in Troll Village with parties, competitions and special occasions, Branch tries to be more fun-loving.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUFVhaO_X664r0rm7JnHruXvTN1yHEo-PvphLPxJR4Kd_Y0YkAvP2D55yLv4Jn5-j4N6y5jR7lxiCQw026Qfqwj_n28.jpg?r=103',
      Title: 'Trolls: The Beat Goes On!',
    },

    {
      arrno: '48',
      Genres: '2015 | 7+ | 1h 34m | Movies Based on Books',
      type: 'popular',
      Title: 'Jurassic World Camp Cretaceous',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdbY3XsUfi8UjdmT83PJlO7QGywNordpPyr9ih88hLDhOPvL9-Ew-pnCSVgTPSJyoPs9uiQqY6Xpfv6DLr__0gM5YqpB.jpg?r=4db',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABa6BfcgIMBrTUWVu0sS9d313Nmz53AJhOOE9II4HVr3H-XQ8tlZYqU8eQAgxf53lwUCms901Sf3be9V-_3OIWagzKcUoJwiGSuHNnxcsVdr14aOIAinubzc8-5g2XSsdiK5NlUzjYNcFRMuf-9yrND_bq5cFrIISsBzpeKsyhkWJyg.png?r=48c',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaNXKPC-deRe6BFSEiEPWLYAVf7hZMf7YArHVYYNQLbrUAendSOJ712XZnw_G_1e9v2mSg9_5A9LWLtr5BG3KLSo98Hv-KlMIPUR46hYwWHpl-OcZiYlaCnkzGpVd9j7UpE47xh0c45M7MnQpHzC5wgz-3V7rg.jpg?r=fd4',
      Description:
        'Six teens invited to attend a state-of-the-art adventure camp on Isla Nublar must band together to survive when the dinosaurs break out of captivity.',
    },
    {
      arrno: '49',
      Genres: '2015 | 7+ | 6 Seasons | TV Shows Based on Books',
      Title: 'Dragons: Race to the Edge',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABenFIjT0wP8xmsiHV6HKnlcNnvzY3WuUElh7hy3ZPgNcUDsXFzI6t7Qdw2sRH_MwyQknRp4pymhksCnGwv5q3POsdtj6.jpg?r=6c6',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaVow0HMLDPEmN0Ojc4U1IUaRoOkahjtxni5Z0ux2IXtySkIRlt8QlrvU57qOiXTIg2pq-PNG_wL6Oby4gNB4SzqHVM.jpg?r=e43',
      Description:
        'From the creators of How to Train Your Dragon comes a new series that takes Hiccup and Toothless to the edge of adventure. A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.',
      type: 'popular',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWNAyc1J-ClNcuB1job38v3lU6TTezDuUD9BTqt-XDTKtkVonjLryyQIFiInamh3wXjSCUn623MbfIPQN5DKKPUVa7IxrneeGTa1.png?r=2a6',
    },
    {
      arrno: '50',
      Description:
        'The Boss Baby brings his big brother Tim to the office to teach him the art of business in this animated series sprung from the hit film.',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUhe6OXz3bQCIYL9QtT4l9EufxExcCsNiGjTlnS_rE7md3sZpTWZi5X4lLpCmgY_gz9lW2v5U5CiA7bUlEHYHvT2peOaemrwA72qxcn0h0Cp5Tsdq2orPTFJbHtWLEQU8gETHUDPvnZXK3i-nxsj9LahFofVGqhVDIOSVwR_QB4Djg.png?r=8d6',
      Title: 'The Boss Baby: Back in Business',
      Genres: '2018 | 7+ | 4 Seasons | TV Comedies',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQBZlSJXBmNv65gEKXukri13WOO4-fvXMxQbm9q35n-xFj_IPWn1H-6bgRbvtLXlE8UgIrnVkszwyYkFkcut3wzRgn5oE2zF0iDxtknTAzuCyEAhdRHN5a9BHull.jpg?r=ff1',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRyD4sKSlYoMWpQEB-DHMfRXsMXz9vMn6NNUpAjspbT6mkxgfkcw2IisHkVHP3kinzV5TzPxCbprfTqkEsS-yS4m43yb.jpg?r=cf9',
      type: 'popular',
    },
    {
      arrno: '51',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUgNw4I-SUhN3jlEr2l7jaRMvuhYyVAFusGMHchdVJCZoYLsLwU4vwWQvSxR7D1Blbc2nz2twHGoc6E8esWXSauVPsE.jpg?r=93f',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW0Y27KgrZg7OeH78m05nsjz9b7Rs4a-hT8FgBAtEQ6SXPc2_H6blFNU8w3mq-f6uLYsErk4ooSpRt9f2WiSqoisgv4R.jpg?r=c87',
      type: 'popular',
      Description:
        'Strong, whip-smart Grizzy rules a Canadian forest, where he has his paws full with a family of frolicsome lemmings.',
      Title: 'Grizzy and the Lemmings',
      Genres: '2017 | All | 2 Seasons | TV Comedies',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABX0Vi2Ojob6QUzQ4v63rULYrQU9Jxidiplm_mvUymgqq-9U7jGX4bwLJlii9Ax6MI3ubmagzT5abk4oyrZsV1A-exB5lIOZ3u220.png?r=2e9',
    },
    {
      arrno: '52',
      Genres: '2016 | 13+ | 3 Seasons | TV Shows Based on Books',
      type: 'popular',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbWR7H6ci9hbyouhd0o_NDTSsMhtJpPwD-l6TzJTjyKYZTOl1wYRTLCWdZ1Z9xBTK1q2AHKtJ-zwHPmXb9TwmIA6wt9CqS4GFIQSZnKFbiVTr7QiYhOU40NMruzuiZGjCbGbe3nN-f2QTrU7gXDdpP7iWcdhvTnuuWe_RPcqodHcOg.png?r=3ee',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdl6-PzX95nbPL5HWathe6A8kttbSAsIzL8jdnj7PGGm2sNSrtgugVevCote0Kr5qhLoiOfOe1JpCPXk7AciSh_758xI.jpg?r=269',
      Description:
        'After uncovering a mysterious amulet, an average teen assumes an unlikely destiny and sets out to save two worlds. Created by Guillermo del Toro.',
      Title: 'Trollhunters: Tales of Arcadia',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTgd649tcoqA2K4IwKwp-tYvdFNrXuLZC5M4ARU14AQOLxIX70gjxMa81LslETr8ocY82j5fa5JYHnBrHlVYxOapoZIKMP-C2Z0hGxKsBt_v1-T_ZtsJQmV8l-jL.jpg?r=0e3',
    },
    {
      arrno: '53',
      Genres: '2017 | 7+ | 8 Seasons | TV Cartoons',
      type: 'popular',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfN0e_nIXHxul9YmATJwvXGekXdye_71cfQf28Vbiv33JsADg-EWNIJJmWYO8iWKbdAAKEqlSzC4etggl9Dqn29YI2RaXE-c0BSg.png?r=13d',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbcg6QJFnm0RbrX0T5sEi3Svnazjh6ssbdFdSI1kRGHgfJbQnahH7Uh73pI5bug1iaaywaDJbPEZDsvzn1E1EtX2BEod.jpg?r=7a5',
      Title: 'Spirit Riding Free',
      Description:
        'In a small Western town, spunky ex-city girl Lucky forms a tight bond with wild horse Spirit while having adventures with best pals Pru and Abigail.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgqbk5fgxC1XbMFXWQt-zpGgWOga8h-3S_x0J2f5qQSUF654Jmd7EhE0DZLAX0g8kdSOGY9z6xi2YjBpua02kxYttA.jpg?r=090',
    },
    {
      arrno: '54',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSTk_RjDgGECdgQKEjckc3AGZvBM8kkcU3RXg061WC8yLW55MS_Jt9eSxZIO7_FQEemtmxLVu6-5EaMb20FCZtHrmgs.jpg?r=ae4',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABajVV54Z0yXvIDzrA3hPAm6UAxTjm9xPYG0NfkeRky2wjDbVDEmX-vKnRx00rWSvsAGCrsXy2UxenzhVYnVNGx3Bzs7FsErHOOq7.png?r=be7',
      type: 'popular',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYgc913hXtu2Co_5CTGGdiqSC57UkVJnvR7fDc6HBfj3NFGknMTk9EhrI4WnjXQ9ab4VOLWLv5SRev25n2Eq1DOcjzhp.jpg?r=7fc',
      Description:
        'When misfit alien Oh mistakenly sends a party invite to the entire galaxy, he goes on the run to avoid trouble and befriends spunky human girl Tip.',
      Title: 'Home: Dream Works',
      Genres: '2015 | 7+ | 1h 34m | Movies Based on Books',
    },
    {
      arrno: '55',
      Genres: '2013 | 7+ | 5 Seasons | TV Comedies',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSvOEzuUKQ1-iGuFq8IaqpW3rXFTqWOi4Lyrur7PORh-geWJTAe1iT7k3sr9r9s6zA1Hk9NsIiG5adGq4InqGJZ0Na4n.jpg?r=d4c',
      type: 'popular',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW9lGQ1W9DGyHDTd6lKeulrQVD5sp6j9P1YL-39gGyuiurjJ0TMkfNfA2oa8qngotln04B88XPwLuEAdd0BGkZ4XT9c.jpg?r=484',
      Description:
        "Superhero roommates Robin, Starfire, Raven, Beast Boy and Cyborg protect Jump City from evildoers, when they're not too busy bickering and competing.",
      Title: 'Teen Titans Go!',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeuOGaFbaPWmA1KLC8fpzNolHUvyxdqaTth_mnw_TDAmOjsqgs91Ywx-l9SApA63Y1OBKUI37-OV6dL-Ujs6OcF2oQmZglyyt4BD.png?r=ccd',
    },
    {
      arrno: '56',
      Description:
        'Learn letters, numbers, animal sounds and more with J.J. in this musical series that brings fun times with nursery rhymes for the whole family!',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc3eiwbu-nD4fIQIVQ1U09rVReNG3YpVJWTmNSzmRJRB7sk4q3H4NnTIEa2Uz314j1Kj6VIApFCa3_ySFdivdH8pYjvu.jpg?r=d0f',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU91Y7hMbEOAnGWYICqzhJzp_Y_chqKf5_zyC4UEq8G8I0ZPteoUmjyG249x4YGOJ-FiJYu72TcHdz0LxDaGgnzZMgw.jpg?r=72b',
      Title: 'CoComelon',
      Genres: '2020 | All | 2 Seasons | Education for Kids',
      type: 'popular',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTbJ4Xvct5uGZp35v9DaRJ1OLtfo-LFCj5VY8vVjDejZqkpOMi_GWebm6QX_CD1MGvDOtqX8VEpJRxb-8ZJamwhPaDwgwpGzMlSh.png?r=994',
    },
    {
      arrno: '57',
      Description:
        'Three 6-year-old kids who live normal lives during the day become superheroes at night, fighting crime as a team known as PJ Masks.',
      Genres: '2015 | All | 2 Seasons | TV Shows Based on Books',
      type: 'popular',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdz6AzwRlitSnzhx0sDa_DsKD7keczLvEDk1YSUiI3VD9SyRgb3AjgQVCyRVdRXQ55hUiI75SGaC8pEN5nPDsqMcA2XW9P12rNAR.png?r=1a4',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY9VwvkRaq-NeG9azDI0cv7WHHwfYgL16xdvpRR2CxCrokh1YJfDuYXmezIxd_WycvZlvKt53_p-ADNf4Q9XZMtu6T0.jpg?r=03e',
      Title: 'PJ Masks',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS0TLI4W4700F49l-uv32L-KUDI0rC2WaX3Nk_og5Cl2MHzNysnJrxmgADaAOp4ayOqtlB_wCXsLb1FqpKSVEXrRbFRS.jpg?r=507',
    },
    {
      arrno: '58',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeauUJ6OmjZ0iFdVPRytm6ET_br6iwp4b1-1ChhD6AgtbwvswPhy517XrWqCv6t7wFSbTlkh5xE2RxlECE3m_Xu0b4Z9.jpg?r=41b',
      type: 'popular',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdW-LjllFRlOEcP1NSwU4jkxuX2u03crAahgdfSaQjzlU5pC64APDJ5IKMFOo_3R4PcmUhhVfmB6QmnjEjf0l87CFbKGoo35X1Po.png?r=840',
      Description:
        'Elite penguin spies Skipper, Kowalski, Rico and Private join forces with the suave agents of the North Wind to defeat power-mad genius Octavius Brine.',
      Title: 'Penguins of Madagascar: The Movie',
      Genres: '2014 | 7+ | 1h 32m | US Movies',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTjssuAjLvPsU2zDw3A_qnX74880lDU_tJRe9oiOyz1WY35pR8j3uP-KXy5VB6VcCKgOBqyNJzMqs_tlJ4JboYzR8Oc.jpg?r=68f',
    },
    {
      arrno: '59',
      Description:
        'A government agency recruits teen driver Tony Toretto and his thrill-seeking friends to infiltrate a criminal street racing circuit as undercover spies.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdgp4qP7JsVrv8of51L8LHd7kUl5yNNNUZALNMl4CxJbvgYKi1XIggdO8HN3-vpSF46D68cPpAYRD1Bkw0Tpji4YNYdjgyvGYXXni9r4-PogVe6wOFGfnmZ9fIYv.jpg?r=3ad',
      Title: 'Fast & Furious Spy Racers',
      Genres: "2019 | 13+ | 4 Seasons | Kids' TV",
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbv17ncjH-HF7QUUENDT4dTBzSeRgv-VhOE-wqT84WXzgWmEANXU9Rj2RaA4yUrksqEqONVAtQMIsYyUxYZ-IKEiOhx41YWqmn2A6A8F3b0FNWfo2JnoXjNP2DhKTUdI7mFkAvzhS9Uz6lTYjrM5bChZ0h90HciRfk4SZx4M4RVXyA.png?r=347',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWn9fra8tV8PEJoxsiy3S1xQl62tB2Js7mI6M0KjfzFM_rT6I99de6Oipqv9wpixia85J268EpoeV8ZgpZSYk719YOX8.jpg?r=284',
      type: 'popular',
    },
    {
      arrno: '60',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW7NYsijwkLyoUwWdu8CfRVE19SWksbSJyD9i0UfKIzDrwu8lyd3xuJTSPB6jGGWdJ53qhIxEsqFYcKU-na4xaSWMIA.jpg?r=a54',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeCNrpFKnfN4BBev2nymaq87uBL_Q7Iu3SBRGvAzTOzY4kWYp6c-p1qZy7F0l0OzZzZ-iyFJd8hENbPPny8X286csuJB.jpg?r=755',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABS7tcd4Gs0apX8AAdQe-tRiOffrP1-UroTJQtXy8KSWdwQwH4QgyKqjNDFCwIior3OyKZAzkkAGovsWNtbvq3gSc5YstnsjzGmEW.png?r=e6a',
      Description:
        "Get to know Barbie and her BFFs -- including next-door neighbor Ken -- in this animated vlog of adventures filmed inside her family's new dreamhouse.",
      Title: 'Barbie Dreamhouse Adventures',
      Genres: '2015 | 7+ | 1h 34m | Movies Based on Books',
      type: 'popular',
    },

    {
      arrno: '61',
      Title: 'Wonder Park',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcZ0SPGm9n5mB8zH0BqhFotWz7LGPjstBCzV7gufC4QG13lFwv4TUp41BFcQKevf4Sr192QBdry2-r4niL1XiidtHGlOq5H22i73.png?r=267',
      type: 'hollywood',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX2a3MGlMnVQA62xBGAvhvmPd-KusBvTYaxe5BsvZZsy-W8ayifOGO6dwz2Eui6NKxkt_GiXYT-kmxoQAoVGiygDr90.jpg?r=e90',
      Description:
        'When her dream amusement park is in jeopardy, a young girl with a wild imagination sets off to save the fantasy wonderland with her furry friends.',
      Genres: '2019 | 7+ | 1h 27m | US Movies',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUBcjQ8UMp3FTa3UZuND_wijkuc1tfx-fCY9qBZmRtXK8W1r0w-kPtrYY85zkTw5z7ye2-eq6fUwXMypL5eEb1L8YIES.jpg?r=359',
    },
    {
      arrno: '62',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRlIb5YRGSz7fShMi3zSvk1vour_3eU_GQct9YV9Lbjw1xxQYPphiVxzvuo4NwNoBgm-xSsAl43aXV4Pl3KTgRAhRCTR.jpg?r=53e',
      type: 'hollywood',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUFVhaO_X664r0rm7JnHruXvTN1yHEo-PvphLPxJR4Kd_Y0YkAvP2D55yLv4Jn5-j4N6y5jR7lxiCQw026Qfqwj_n28.jpg?r=103',
      Title: 'Trolls: The Beat Goes On!',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaYMoVnWM4JlNbrv4XdU9yfb0urhwZI-WeeM_4wcNh_fDK8Df3vhQ5ghCUEHP6_ZfALzERICgTneqN3BijghoOB7Qps9kIOAK4H3.png?r=b73',
      Description:
        'As Queen Poppy celebrates a time of peace in Troll Village with parties, competitions and special occasions, Branch tries to be more fun-loving.',
      Genres: '2018 | 7+ | 4 Seasons | TV Cartoons',
    },

    {
      arrno: '63',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVwFFMCetV0Zl0BDoSI_d0i9atYKQyu8wRDXRmFbeOgYR-zqMMufp1h6Fs4zOeCh2mmGfD_L2eNPHqKTb5bZmkyL0sbnIxKyfXgvFB4dwzwcApS1WlDGp72j0tkg.jpg?r=f11',
      type: 'hollywood',
      Genres: '2018 | 7+ | 2 Seasons | TV Cartoons',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbfEvjxgY_bhN3SLfWDg6v_Q9TUMUOAUUvxj1zsvril2Sbx92XyFxHx_EBKsep5Ra_AyFk2jNxqjw8uK-voWWyqwx6dgHFM6-lWeB8OyYyTPvy765DOu9zO_Wh_C0YgDRl5sZ2U2jDPbbeCOSlwPYmEZPUzcCUrIXzmrSKtTLd90ng.png?r=faa',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeuFVEcU2KMweNZGfHcC9nDeHdcynOS87k2NE6rBShf8dTy_XacdhPEei4QxE9zDPBwPFHQbs_lgjmnFrj6WOPKPQR2R.jpg?r=166',
      Description:
        'Stranded on a tropical island, two silly larva buddies find slapstick fun in everything from discovering food to meeting new animal friends.',
      Title: 'Larva Island',
    },
    {
      arrno: '64',
      Description:
        'The forest-dwelling Lorax has to stop the short-sighted Once-ler from ruining the environment for profit in this adaptation of the Dr. Seuss classic.',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdh0MZeYegF4oigpskRyOBRFnnptdy-6fDTMTrM3IJwHmxrngFczxlv4Z6toLpJOCRNnuBXud3D4G6TBpWPI6M9tKCDY5lAFPkJy.png?r=e32',
      Title: "Dr. Seuss' The Lorax",
      Genres: '2012 | 7+ | 1h 26m | Movies Based on Books',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeaLZWC8vYY7-GvvlxGdNRKP0HnnEHM0KfVwbNABV79tLPmZFMwnIRnw9P8fCis2h26tSytVllig4q2E2x4ArYipvGZL.jpg?r=abd',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTE4PkMSgKqAHMfYIlkc9NncQXKGPMDh5oDgSBL7gJwNs2OtvTwr3nhK_PhbVKLCnXnkgM7rKkSNypvJc7H2qP-19lY.jpg?r=b38',
      type: 'hollywood',
    },

    {
      arrno: '65',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSKkB6sEFccYT8L_vk8KDXmOjTTDJBdgJmv7NHG0sTDyEN6pkj2mqRQuZJ41yJYQqZtuchtgylFg-xk2mPaAhNpZPgM.jpg?r=e32',
      type: 'hollywood',
      Description:
        "Barry, a worker bee stuck in a dead-end job making honey, sues humans when he learns they've been stealing bees' nectar all along.",
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQALjj06SjSViWSeFBz7q2tkFSb1gT2roImqYhk6u4ZJr_FcDJgc-EThT3SK6aQERYnWMAlldDNCsg83gNuvpdmsoGor.jpg?r=859',
      Genres: '2007 | 7+ | 1h 32m | US Movies',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSq1Pc3cOkgS9IMBFkFICmyPQuC81jgEWrX7ZFdAz8K6RvAA-Vi20TwgLfcJisl0A_htSqTqUc8Zew9YQz8ukFXPwvX2tD3NmUwH.png?r=c14',
      Title: 'Bee Movie',
    },
    {
      arrno: '66',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeA7phJqJ5CBdhCMbzSkgB-xpY9HTe2GlglpiDXZpntatXKFY8QBVjyGDS9mV1HN6lcpqkN-qs30fgI8b9sFmzwXTjoi.jpg?r=ae2',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABesOiRgB76hYF-CEJh2SneClodz9PVnQNBmZSGxGT4ijnQ5guBPIzhtUxKfMePRkqUH7bsg3Xbyh0j4arXg2_prBgnbO3uCPcxOGkZrKa7Rwca2U_p7ndZSXCxuS.jpg?r=158',
      Title: 'The Willoughbys',
      Description:
        'Four siblings with horribly selfish parents hatch a plan to get rid of them for good and form a perfectly imperfect family of their own.',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABT8Pq_be6hISktXqBeFda3pWJVdPxKFRwcnTZ_3zZWxbpwgfGvDwJhboUCzuZRvNjxnsfjkGuyjZzbmvroIfbv9KVRQIUPcQztt_Am1uJ3DSvUtHcvXLAj7bDU9RK3Xm-EO3-ZwWseGEmTyIT8kHTBnZiKL-9boIasFKs9wpWS8_OA.png?r=6a2',
      type: 'hollywood',
      Genres: '2020 | 7+ | 1h 32m | Movies Based on Books',
    },
    {
      arrno: '67',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdpIfyp7RZAEZnOsQaH4vygYWYlJFPFCWHeXxqBw0MujVCVACg7J6VioyJ9TQMobYPKhe4lM5UqeyDTSPpqfcMXsKiM.jpg?r=623',
      Genres: "2011 | All | 2 Seasons | Kids' TV",
      Title: 'Robocar Poli',
      type: 'hollywood',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABR_AnhQ88w1EIS2rv_3B6z62-0bOz-7HB17C5pc9Xsah87oQPkM9VhZR-pf2KderlWm_-TZGKJySgDFX1Y-tBRu2tJXWwnv2A12F.png?r=130',
      Description:
        'When disaster strikes in Brooms Town, police car Robocar Poli, fire truck Robotruck Roy and their friends on the rescue team race to save the day.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdg_k6hY23EcajFx3UP1VfGqu39rcJzO_-LqvRIhTrgN_9v64rpOENppvsltLvUNovdJlYBsu9Mm7Gn0ScDRK726AaEA.jpg?r=c9b',
    },

    {
      arrno: '68',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABREtmp5ikQ5lOIq1XrEtA_8e-6hwep-jljHSTwKb248geEi0pacAAaEURc944HBwIq5Na6OIW5Ra3kNsKR3OoJUGfDpZ.jpg?r=148',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVhxjpyk31IJSWbfYNQo86KIJOUyUcfeKqMZcERZVzFeCU1tZzgOpHE8d5KMcYsG7nFlOIAX-UPjXu_x2oOpgSmyIPpQ.jpg?r=176',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbsdulQKO89nn2yGnUlKWnkjKALUOtBWqpLfECdNJHPcXJOFyVCSNGR12n_ZNdJv8tbJ7N6Ytq9tLs_wvGLZYgA8s7-e_-Eo2UMg.png?r=ca7',
      Title: 'Madagascar: Escape 2 Africa',
      type: 'hollywood',
      Genres: '2008 | 7+ | 1h 31m | US Movies',
      Description:
        'A botched rescue strands Alex the lion and his companions in Africa. Sadly, Alex discovers he has little in common with the locals.',
    },

    {
      arrno: '69',
      Genres: '2011 | All | 1h 35m | US Movies',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaIeGIi1BB4_qtXqN6s59aRpnlVpBaJAlCUBJERn8RSj5KqQ4zX3MLt3aJ-iBUJ4-oXdILGy7YIG66lFxcTD-pdSEcQF.jpg?r=9e3',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUi36xCLbIFVOaIjC7sgERF6Jvw2BfDzh_etBt_g30ID4OfbsqIxaPDsGd8eUW2YVvBOCuLB_HJ5rd2o3sqJTWWh4co.jpg?r=9ab',
      type: 'hollywood',
      Description:
        "A jobless slacker finds himself beyond busy after he runs over the Easter Bunny and has to take over the rabbit's duties so the holiday can continue.",
      Title: 'Hop',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdRazjz53dbV0s_YwevKab_211FNPgGfXUsod0h-YhU4u4dbYOovjQkuXYrQenxwGoVn03AEp24aK2AqREfQtUO-qXBC3CisherY.png?r=608',
    },
    {
      arrno: '70',
      Description:
        'The fourth chapter of this fairy-tale series finds Shrek feeling less like a monster and more like a man in the midst of a midlife crisis.',
      Title: 'Shrek Forever After',
      Genres: '2010 | 7+ | 1h 34m | Movies Based on Books',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYWUh-nAEDUW6u2lEJiwRssG6Cud--kgR97yymKnt_yU1_FnuPd4VRtKKm_kV97sYEGSGsRG1T9i3xQjzGKLYjTTElc.jpg?r=a17',
      type: 'hollywood',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaDO5tDKFk2yOKnu-nYs6Cjz4xD-YeD4Wwjboig9HGZm_kDDwh2qF64h6Pw_uFFGTej2_zfzQHZZIY_ZN9mF98NIeSd7.jpg?r=26a',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYhFMb_DYL_lHFL4NmqL8o0la-K44zBBzFg9NoPYpyITsY_R-Ks8iO3ZRr-WSh-0-SWGQxqiSuK-u0JSezZE9fD8PcGEwRt16N7Y.png?r=d31',
    },
    {
      arrno: '71',
      Genres: '2018 | 13+ | 2 Seasons | TV Cartoons',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTgd649tcoqA2K4IwKwp-tYvdFNrXuLZC5M4ARU14AQOLxIX70gjxMa81LslETr8ocY82j5fa5JYHnBrHlVYxOapoZIKMP-C2Z0hGxKsBt_v1-T_ZtsJQmV8l-jL.jpg?r=0e3',
      Title: '3Below: Tales of Arcadia',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABbWR7H6ci9hbyouhd0o_NDTSsMhtJpPwD-l6TzJTjyKYZTOl1wYRTLCWdZ1Z9xBTK1q2AHKtJ-zwHPmXb9TwmIA6wt9CqS4GFIQSZnKFbiVTr7QiYhOU40NMruzuiZGjCbGbe3nN-f2QTrU7gXDdpP7iWcdhvTnuuWe_RPcqodHcOg.png?r=3ee',
      type: 'hollywood',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABY8MNR-wZb_udXTxNgZnqV11xvlP8BHlQj_c32uifIgpdUhPnhUaGIt5LLk-1SGINVpOp7QEe4TEAnmP-sJ7AY877z_r.jpg?r=973',
      Description:
        'After crash-landing on Earth, two royal teen aliens on the run struggle to blend in with humans as they evade intergalactic bounty hunters.',
    },
    {
      arrno: '72',
      Genres: '2014 | 7+ | 1h 32m | US Movies',
      Title: 'Mr. Peabody & Sherman',
      type: 'hollywood',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS6dD4NjXzOssyDuJhq-g875E7vkTuSqYEhSkZOWX6Y7VICdSfPPP1HXR-043F_rLxV2Vl2sZeSQEwNjimfxDUjEpFw.jpg?r=e60',
      Description:
        'Resurrected from the 1960s animated series Rocky and Bullwinkle, canine genius Mr. Peabody and young Sherman take a dizzying ride through time.',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT5s2s88ziG60bqCZRThBjXPAL2GdDgAv26eB5l-banDSVnyXn6u77mHQD2NNPl53Mdae_tsO1yow8oWolT5ZUYai0IF.jpg?r=d81',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRkyxrtY5LRPEPG-46E4mTyxgkK2FRzW3txZhGcb-lpYE-70KVqEyG94AcToSrQo2HN37KFtbw-U3StBwXUXLOsi_akPAA6rwbh4.png?r=b4b',
    },

    {
      arrno: '73',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABULERER_SpN4aHU8RiDI2msvkcAZ0b9gO3HuL_CK5IUogPCezZLZFGIXf_X266VUi0-uq_hept845Sof_GSxwMMf71JP.jpg?r=120',
      Title: 'The LEGO Movie 2: The Second Part',
      Genres: '2019 | 7+ | 1h 47m | US Movies',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQr1kgC7F0zCXxbrUqq96tCu6MXiMDwddF5kmyxzO4VecfDf76AoIqL9EbO9uMVDbjVgagX2wVgzYPMM6FTIYFJIVTU.jpg?r=018',
      type: 'hollywood',
      Description:
        'The adventures of Master Builder Emmet continue! When Lego Duplo aliens kidnap Lucy and Batman, he must head out into space to save the day.',
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUOau78xVvWb7gagB7UlKDbxSqJ7x9cq5M8si8BAvitKMKNUCa_XdvBMg8N-Lwf-r-DpP4Y8YjchuQax1vPRbz-04R-tyLcG4X4d.png?r=6dd',
    },
    {
      arrno: '74',
      Genres: "2013 | All | 3 Seasons | Kids' TV",
      TitleImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaaHuTicdj0Fs1i6AZ4QdxBmpbkHh6B7-p6MHyiQq5BBf-D32iMvtZunmmkQH-xMALkBOx5rF8SresHUpvsxUXUxBH0N9SqSxvXL.png?r=c0f',
      BackgroundImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUJd0vgg6ZV2SK9VZwK8XU1J0SkwIs7uuVltEtzYlDkWNJcliqZADSuq8uumbX3k8IcDtoWLrXXa7Z-qnEzGW_OI9wTg.jpg?r=031',
      type: 'hollywood',
      Description:
        'Birds Red, Chuck and their feathered friends have lots of adventures while guarding eggs in their nest that pesky pigs keep trying to steal.',
      CardImg:
        'https://occ-0-4704-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUn5z9GbcTWP_JhLRRUMPyXtaLLeZpktkSG7ztm202gTeNjwJOh4qc35IWKSWKUiU2rbF1ZC7Jz3preVNtu3UjVTwWU.jpg?r=50a',
      Title: 'Angry Birds',
    },
  ],
};

export default data;
