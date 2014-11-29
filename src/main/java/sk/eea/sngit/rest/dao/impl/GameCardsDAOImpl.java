/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sk.eea.sngit.rest.dao.impl;

import org.springframework.stereotype.Repository;
import sk.eea.sngit.rest.dao.GameCardsDAO;
import sk.eea.sngit.rest.model.GameCards;

/**
 *
 * @author murphy
 */
@Repository
public class GameCardsDAOImpl extends GenericHibernateDAOImpl<GameCards, Long> implements GameCardsDAO {
    
}
