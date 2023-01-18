package back.domain.eatspot.service;

import back.domain.eatspot.entity.Eat;

import java.util.Optional;

public class EatService {

    public Eat Patch(Eat eat, Long eatId){
        Eat findEat = verifiedEat(eatId);

        Optional.ofNullable(eat.getName())
                .ifPresent(name -> findEat.setName(name));
        Optional.ofNullable(eat.getIat())
                .ifPresent(iat -> findEat.setIat(iat));
        Optional.ofNullable(eat.getIng())
                .ifPresent(iat ->findEat.setIat(iat));
        return eatRespository.save(findEat);
    }

    public void delete(Long eatId){
        Eat eat = verifiedEat(eatId);


    }
}
