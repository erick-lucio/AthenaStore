package com.spring.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.spring.db.Conexao;
import com.spring.models.*;

public abstract class ColaboradorDao {
	
	public static void AdicionarColaborador(Colaborador colaborador)throws Exception {
		Connection conexao = Conexao.getconnection();
		
		String sql = "INSERT INTO colaborador (nome,cpf,data) values (?,?,now())";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setString(1,colaborador.getNome());
		stmt.setString(2,colaborador.getCPF());
		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static void RemoverColaborador(Colaborador colaborador) throws Exception{
		Connection conexao = Conexao.getconnection();
		
		String sql = "DELETE FROM colaborador WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setInt(1,colaborador.getId());

		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static void AtualizarColaborador(Colaborador colaborador) throws Exception{
		Connection conexao = Conexao.getconnection();
		
		String sql = "UPDATE colaborador SET nome = ?, cpf = ?  WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setString(1,colaborador.getNome());
		stmt.setString(2,colaborador.getCPF());
		stmt.setInt(3,colaborador.getId());
		
		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static List<Colaborador> TodosColaboradores() throws Exception {
		List<Colaborador> colaboradores = new ArrayList<Colaborador>();
		
		Connection conexao = Conexao.getconnection();
		
		String sql = "SELECT * FROM colaborador";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		ResultSet rs = stmt.executeQuery();
		
		while(rs.next()) {
			Colaborador colaborador = new Colaborador();
			colaborador.setCPF(rs.getString("cpf"));
			colaborador.setNome(rs.getString("nome"));
			colaborador.setData(rs.getDate("data"));
			colaborador.setId(rs.getInt("id"));
			
			colaboradores.add(colaborador);
		}
		
		rs.close();
		stmt.close();
		conexao.close();
		
		return colaboradores;
	}
	
	public static Colaborador GetColaborador(int id) throws Exception {
		
		Colaborador colaborador = new Colaborador();
		Connection conexao = Conexao.getconnection();
		
		String sql = "SELECT * FROM colaborador WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setInt(1,id);
		
		ResultSet rs = stmt.executeQuery();
		
		while(rs.next()) {
			
			colaborador.setCPF(rs.getString("cpf"));
			colaborador.setNome(rs.getString("nome"));
			colaborador.setData(rs.getDate("data"));
			colaborador.setId(rs.getInt("id"));
			
			
		}
		
		rs.close();
		stmt.close();
		conexao.close();
		
		return colaborador;
	}
}
