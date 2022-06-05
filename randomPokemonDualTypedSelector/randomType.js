$(document).ready(event => {

    let types = ["fire", "grass", "water", "bug", "steel", "rock", "ground", "electric", "normal", "ice", "poison", "psychic", "ghost", "dark", "flying", "fairy", "fighting", "dragon"];
    let t_first_type;
    let t_second_type;


    $('#shuffle').click(event => {

        let first_type = "";
        let second_type = "";

        while(first_type === second_type || first_type === undefined || second_type === undefined){
            first_type = types[Math.floor(Math.random(0,1)*types.length)];
            second_type = types[Math.floor(Math.random(0,1)*types.length)];
        }

        $('#data_text').text(`${first_type}`);
        $('#data_text_2').text(`${second_type}`);



        if((t_first_type !== undefined || t_first_type !== "") && (t_second_type !== undefined || t_second_type !== "")){

            if(first_type !== t_first_type){
                $('#data_text').removeClass(t_first_type);

                t_first_type = first_type;

                $('#data_text').addClass(`${t_first_type}`);
            }
            if(second_type !== t_second_type){
                $('#data_text_2').removeClass(t_second_type);

                t_second_type = second_type;

                $('#data_text_2').addClass(`${t_second_type}`);
            }
        } else {
            $('#data_text').addClass(`${first_type}`);
            $('#data_text_2').addClass(`${second_type}`);
        }
    });

    

});



  

