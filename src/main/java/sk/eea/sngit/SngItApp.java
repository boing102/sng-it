package sk.eea.sngit;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import sk.eea.sngit.model.PostgresArray;

public class SngItApp {

	public static void main(String[] args) {
		ApplicationContext applicationContext = new ClassPathXmlApplicationContext(
				"context.xml");

		try {
			PostgresArray postgresArray = (PostgresArray) applicationContext
					.getBean("postgresArrayImpl");

			String[] strings = postgresArray.get();
			for (int i = 0; i < strings.length; i++) {
				System.out.println(strings[i]);
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		

	}
}
