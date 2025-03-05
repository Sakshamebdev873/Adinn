const imgarray = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6d71/fd79/723d37da1f1218d8e7f423b847fb1fff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r9WD-uAUuLLiz3F5hlPbJ5gFOOb-JjHoR0q4QBOfULZqYsxi06E8YMCCdd-DhhxOs1YfD6A0CzQTKf2iZBKJE5-6PifRYE7Cac5ggZagsiVgwVYgUkMbB4CyxaLd-eYxBWjRPuQ021qqQAAOmPWx1NIuiTD0AQsWie7QEKE8DHkEg0Ei3MCwuxNwqqeNnS4WNPq95s-ftwHDX5yP-kE2CpbfVhGMgKPkPSR4KlREiaj1rnxW3Cv4RnH82amkimZjMBU5HAB83kQES2HkgpJ-GIimh5C6467XnchCd1F7TLEff96grn8sjKEycr99xHeMZZRgDJJvJAzmvNM-YD06OA__",
      id: 1,
      text: "3D & Cut - Out",
      para: "Dindugal Thalappakatti",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 2,
      text: "Geo Targeting",
      para: "Malabar",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 3,
      text: "Geo Targeting",
      para: "Malabar",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6d71/fd79/723d37da1f1218d8e7f423b847fb1fff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r9WD-uAUuLLiz3F5hlPbJ5gFOOb-JjHoR0q4QBOfULZqYsxi06E8YMCCdd-DhhxOs1YfD6A0CzQTKf2iZBKJE5-6PifRYE7Cac5ggZagsiVgwVYgUkMbB4CyxaLd-eYxBWjRPuQ021qqQAAOmPWx1NIuiTD0AQsWie7QEKE8DHkEg0Ei3MCwuxNwqqeNnS4WNPq95s-ftwHDX5yP-kE2CpbfVhGMgKPkPSR4KlREiaj1rnxW3Cv4RnH82amkimZjMBU5HAB83kQES2HkgpJ-GIimh5C6467XnchCd1F7TLEff96grn8sjKEycr99xHeMZZRgDJJvJAzmvNM-YD06OA__",
      id: 4,
      text: "3D & Cut - Out",
      para: "Dindugal Thalappakatti",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 5,
      text: "Geo Targeting",
      para: "Malabar",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6d71/fd79/723d37da1f1218d8e7f423b847fb1fff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r9WD-uAUuLLiz3F5hlPbJ5gFOOb-JjHoR0q4QBOfULZqYsxi06E8YMCCdd-DhhxOs1YfD6A0CzQTKf2iZBKJE5-6PifRYE7Cac5ggZagsiVgwVYgUkMbB4CyxaLd-eYxBWjRPuQ021qqQAAOmPWx1NIuiTD0AQsWie7QEKE8DHkEg0Ei3MCwuxNwqqeNnS4WNPq95s-ftwHDX5yP-kE2CpbfVhGMgKPkPSR4KlREiaj1rnxW3Cv4RnH82amkimZjMBU5HAB83kQES2HkgpJ-GIimh5C6467XnchCd1F7TLEff96grn8sjKEycr99xHeMZZRgDJJvJAzmvNM-YD06OA__",
      id: 6,
      text: "3D & Cut - Out",
      para: "Dindugal Thalappakatti",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 7,
      text: "Geo Targeting",
      para: "Malabar",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6d71/fd79/723d37da1f1218d8e7f423b847fb1fff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r9WD-uAUuLLiz3F5hlPbJ5gFOOb-JjHoR0q4QBOfULZqYsxi06E8YMCCdd-DhhxOs1YfD6A0CzQTKf2iZBKJE5-6PifRYE7Cac5ggZagsiVgwVYgUkMbB4CyxaLd-eYxBWjRPuQ021qqQAAOmPWx1NIuiTD0AQsWie7QEKE8DHkEg0Ei3MCwuxNwqqeNnS4WNPq95s-ftwHDX5yP-kE2CpbfVhGMgKPkPSR4KlREiaj1rnxW3Cv4RnH82amkimZjMBU5HAB83kQES2HkgpJ-GIimh5C6467XnchCd1F7TLEff96grn8sjKEycr99xHeMZZRgDJJvJAzmvNM-YD06OA__",
      id: 8,
      text: "3D & Cut - Out",
      para: "Dindugal Thalappakatti",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 9,
      text: "Geo Targeting",
      para: "Malabar",
    },
  ];
  export default imgarray