
$(document).ready(function () {
    var counter = 0;
    var t = [
        [   "1",
            "tc65",
            "http://www.iec.ch/tc65"
        ],
        [   "2",
            "iec",
            "http://www.iec.ch/"
        ],
        [   "3",
            "test3",
            "https://www.w3schools.com"
        ],
        [   "3",
            "test3",
            "https://www.w3schools.com"
        ],
        [   "3",
            "test3",
            "https://google.de"
        ],
        [   "3",
            "test3",
            "https://google.de"
        ]
      ];

    var table = $('#bookmarkTable').DataTable({
        "searching": true,
        stateSave: true,
        paging: false,
        scrollY: 150,
        data: t,
    });
    $('.dataTables_length').addClass('bs-select');

    $('#addRow').on( 'click', function () {
        table.row.add( [
            counter,
            'test' + counter,
            "https://google.de"
        ] ).draw( false );
 
        counter++;
    } );
//Saving values probably with ajax
 $("#bookmarkTable").on("click", "tr", function () {
    var data = table.row( this ).data();
    console.log(data);
    var embed = document.getElementById("embededWebsite");
    embed.src = data[2];
 });
});